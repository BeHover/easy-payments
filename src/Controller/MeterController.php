<?php

namespace App\Controller;

use App\Entity\Meter;
use App\Entity\User;
use App\Repository\MeterRepository;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MeterController extends AbstractController
{
    /**
     * @Route("/meter", name="app_meter", methods={"POST"})
     */
    public function createMeters(
        Request $request,
        MeterRepository $meterRepository,
        ServiceRepository $serviceRepository,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();
        if (! $user instanceof User) {
            throw new \LogicException('Wrong user interface!');
        }

        $apartment = $user->getApartment();
        $requestData = $request->toArray();

        foreach ($requestData['meters'] as $meter) {
            $newMeter = new Meter(
                $apartment,
                $serviceRepository->find($meter['service']),
                $meter['value']
            );
            $meterRepository->add($newMeter, false);
        }

        $entityManager->flush();

        return new JsonResponse(['ok']);
    }
}
