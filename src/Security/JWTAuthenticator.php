<?php

declare(strict_types=1);

namespace App\Security;

use App\Exceptions\TokenNotProvidedException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Http\Authenticator\AbstractAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\SelfValidatingPassport;

class JWTAuthenticator extends AbstractAuthenticator
{
    private string $jwtKey;

    public function __construct(string $jwtKey)
    {
        $this->jwtKey = $jwtKey;
    }

    public function supports(Request $request): ?bool
    {
        return $request->headers->has('X-AUTH-TOKEN');
    }

    /**
     * @throws TokenNotProvidedException
     */
    public function authenticate(Request $request): SelfValidatingPassport
    {
        $apiToken = $request->headers->get('X-AUTH-TOKEN');
        if (null === $apiToken) {
            throw new TokenNotProvidedException('No API token provided');
        }

        $data = JWT::decode($apiToken, new Key($this->jwtKey, 'HS256'));

        return new SelfValidatingPassport(new UserBadge($data['uuid']));
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): ?Response
    {
        return null;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception): JsonResponse
    {
        $data = [
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())
        ];

        return new JsonResponse($data, Response::HTTP_UNAUTHORIZED);
    }
}