<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use App\Exceptions\UserValidationException;
use App\Repository\ApartmentRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityNotFoundException;
use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;

class UserLoginService
{
    private UserRepository $userRepository;

    private ApartmentRepository $apartmentRepository;

    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(
        UserRepository $userRepository,
        ApartmentRepository $apartmentRepository,
        UserPasswordHasherInterface $passwordHasher
    ) {
        $this->userRepository = $userRepository;
        $this->apartmentRepository = $apartmentRepository;
        $this->passwordHasher = $passwordHasher;
    }

    /**
     * @throws EntityNotFoundException|UserNotFoundException
     */
    public function getUserFromLoginRequest(Request $loginRequest): User
    {
        $requestBody = $loginRequest->toArray();
        if (! array_key_exists('apartmentId', $requestBody)) {
            throw new BadRequestException('Request don\'t provide apartmentId post argument!');
        }

        $apartmentId = $requestBody['apartmentId'];
        $apartment = $this->apartmentRepository->find($requestBody['apartmentId']);

        if (null === $apartment) {
            throw new EntityNotFoundException(sprintf(
                'Apartment not found: id %d',
                $apartmentId
            ));
        }

        $user = $this->userRepository->findOneBy([
            'apartment' => $apartment,
        ]);

        if (null === $user) {
            throw new UserNotFoundException(sprintf(
                'User not found by apartmentId %d',
                $apartmentId
            ));
        }

        return $user;
    }

    /**
     * @throws UserValidationException
     */
    public function validateUserPassword(User $user, string $password): void
    {
        if (! $this->passwordHasher->isPasswordValid($user, $password)) {
            throw new UserValidationException(sprintf(
                'User validation error: user with uuid: %s was given wrong password %s',
                $user->getUuid(),
                $password
            ));
        }
    }
}
