<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\Request;

class RegisterRequestParser
{
    public function parseRequest(Request $request): array
    {
        $requestBody = $request->toArray();

        $requestArray = [
            'apartmentId' => $requestBody['apartmentId'],
            'passwordId' => $requestBody['passwordId'],
            'tenantName' => $requestBody['tenantName'],
            'tenantSurname' => $requestBody['tenantSurname'],
            'tenantPatronymics' => $requestBody['tenantPatronymics'],
            'password' => $requestBody['password'],
        ];
        $this->validate($requestArray);

        return $requestArray;
    }

    private function validate(array $request)
    {
        foreach ($request as $key => $value) {
            if (null === $value) {
                throw new BadRequestException("$key cannot be null!");
            }
        }
    }
}
