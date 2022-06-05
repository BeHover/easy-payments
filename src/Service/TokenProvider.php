<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class TokenProvider
{
    private string $jwtKey;

    public function __construct(string $jwtKey)
    {
        $this->jwtKey = $jwtKey;
    }

    public function generateForUser(User $user): string
    {
        return JWT::encode([
            'uuid' => $user->getUuid(),
        ], $this->jwtKey, 'HS256');
    }

    public function decode(string $token): array
    {
        return (array) JWT::decode($token, new Key($this->jwtKey, 'HS256'));
    }
}
