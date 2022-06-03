<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Exception\BadRequestException;
use Symfony\Component\HttpFoundation\Request;

class RegisterRequestParser
{
    public function parseRequest(Request $request): array
    {
        $requestArray = [
            'apartmentId' => $request->get('apartmentId'),
            'passwordId' => $request->get('passwordId'),
            'tenantName' => $request->get('tenantName'),
            'tenantSurname' => $request->get('tenantSurname'),
            'tenantPatronymics' => $request->get('tenantPatronymics'),
            'password' => $request->get('password'),
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