<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Service;
use App\Repository\ServiceRepository;

class ServiceManager
{
    private ServiceRepository $serviceRepository;

    public function __construct(
        ServiceRepository $serviceRepository
    ) {
        $this->serviceRepository = $serviceRepository;
    }

    public function getAllServices(): array
    {
        return $this->serviceRepository->findAllInArray();
    }

    public function createService(
        string $name,
        string $provider,
        float $pricePerUnit,
        float $pricePerHuman
    ): Service {
        return new Service($name, $provider, $pricePerUnit, $pricePerHuman);
    }
}
