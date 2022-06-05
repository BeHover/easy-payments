<?php

declare(strict_types=1);

namespace App\Controller;

use App\Exceptions\UserValidationException;
use App\Service\TokenProvider;
use App\Service\UserLoginService;
use Doctrine\ORM\EntityNotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;

class LoginController extends AbstractController
{
    private UserLoginService $loginService;

    public function __construct(
        UserLoginService $loginService
    ) {
        $this->loginService = $loginService;
    }

    /**
     * @Route(path="/login", name="login", methods={"POST"})
     * @throws UserValidationException|EntityNotFoundException|UserNotFoundException
     */
    public function login(Request $request, TokenProvider $tokenProvider): JsonResponse
    {
        $user = $this->loginService->getUserFromLoginRequest($request);
        $this->loginService->validateUserPassword($user, $request->toArray()['password']);

        $token = $tokenProvider->generateForUser($user);

        return new JsonResponse([
            'token' => $token,
        ]);
    }
}
