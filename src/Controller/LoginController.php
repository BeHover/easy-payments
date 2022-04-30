<?php

declare(strict_types=1);

namespace App\Controller;


use App\Exceptions\UserValidationException;
use App\Service\UserLoginService;
use Doctrine\ORM\EntityNotFoundException;
use Firebase\JWT\JWT;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;

class LoginController extends AbstractController
{
//    private UserLoginService $loginService;
//    private string $jwtKey;
//
//    public function __construct(
//        UserLoginService $loginService,
//        string  $jwtKey
//    ) {
//        $this->loginService = $loginService;
//        $this->jwtKey = $jwtKey;
//    }
//
//    /**
//     * @Route(path="/login", name="login", methods={"POST"})
//     * @throws UserValidationException|EntityNotFoundException|UserNotFoundException
//     */
//    public function login(Request $request): JsonResponse
//    {
//        $user = $this->loginService->getUserFromLoginRequest($request);
//        $this->loginService->validateUserPassword($user, $request->get('password'));
//
//        $token = JWT::encode(['uuid' => $user->getUuid()], $this->jwtKey, 'HS256');
//
//        return new JsonResponse(['token' => $token]);
//    }

    /**
     * @Route(path="/test", name="test", methods={"GET"})
     */
    public function test(LoggerInterface $logger)
    {
        $logger->debug("test");
    }
}