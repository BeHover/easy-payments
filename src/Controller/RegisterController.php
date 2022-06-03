<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Repository\ApartmentRepository;
use App\Service\RegisterRequestParser;
use App\Service\TokenProvider;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\IdGenerator\UuidGenerator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\PasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegisterController extends AbstractController
{
    /**
     * @Route("/register", name="app_register")
     */
    public function register(
        Request $request,
        ApartmentRepository $apartmentRepository,
        EntityManagerInterface $entityManager,
        RegisterRequestParser $requestValidator,
        TokenProvider $tokenProvider,
        UuidGenerator $uuidGenerator,
        PasswordHasherInterface $passwordHasher
    ): JsonResponse {
        $data = $requestValidator->parseRequest($request);

        $apartment = $apartmentRepository->find($data['apartmentId']);
        if (null === $apartment) {
            return new JsonResponse(
                ['message' => "Apartment with id: {$data['apartmentId']} not found!"],
                JsonResponse::HTTP_INTERNAL_SERVER_ERROR
            );
        }

        $apartment->setTenantName($data['tenantName']);
        $apartment->setTenantSurname($data['tenantSurname']);
        $apartment->setTenantPatronymic($data['tenantPatronymics']);
        $apartment->setPassport($data['passportId']);

        $user = new User();
        $user->setUuid((string) $uuidGenerator->generateId($entityManager, $user));
        $user->setPassword($passwordHasher->hash($data['password']));
        $user->setApartment($apartment);

        $entityManager->persist($user);
        $entityManager->flush();

        $token = $tokenProvider->generateForUser($user);

        return new JsonResponse(['token' => $token]);
    }
}
