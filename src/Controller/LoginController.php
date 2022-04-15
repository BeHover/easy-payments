<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\ApartmentRepository;
use App\Repository\DistrictRepository;
use App\Repository\HouseRepository;
use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;

class LoginController extends AbstractController
{
    private UserRepository $userRepository;
    private ApartmentRepository $apartmentRepository;
    private HouseRepository $houseRepository;
    private DistrictRepository $districtRepository;
    private UserPasswordHasherInterface $passwordHasher;
    private string $jwtKey;

    public function __construct(
        UserRepository $userRepository,
        ApartmentRepository $apartmentRepository,
        HouseRepository $houseRepository,
        DistrictRepository $districtRepository,
        UserPasswordHasherInterface $passwordHasher,
        string  $jwtKey
    ) {
        $this->userRepository = $userRepository;
        $this->apartmentRepository = $apartmentRepository;
        $this->houseRepository = $houseRepository;
        $this->districtRepository = $districtRepository;
        $this->passwordHasher = $passwordHasher;
        $this->jwtKey = $jwtKey;
    }

    /**
     * @Route(path="/login", name="login")
     */
    public function login(Request $request): JsonResponse
    {
        $district = $request->get('district');
        $street = $request->get('street');
        $houseNumber = $request->get('house-number');
        $apartmentNumber = $request->get('apartment-number');
        $code = $request->get('code');

        $district = $this->districtRepository->findOneBy(['name' => $district]);
        $house = $this->houseRepository->findOneBy(['district' => $district, 'address' => $street, 'number' => $houseNumber]);
        $apartment = $this->apartmentRepository->findOneBy(['house' => $house, 'number' => $apartmentNumber]);

        $user = $this->userRepository->findOneBy(['apartment' => $apartment]);

        if (!$this->passwordHasher->isPasswordValid($user, $code)) {
            throw new BadCredentialsException(sprintf(
                'Wrong code for given data: district %s, street %s, house number %d, apartment number $d, code %s',
                $district->getName(),
                $house->getAddress(),
                $house->getNumber(),
                $code
            ));
        }

        $token = JWT::encode(['uuid' => $user->getUuid()], $this->jwtKey, 'HS256');

        return new JsonResponse(['token' => $token]);
    }
}