<?php

declare(strict_types=1);

namespace App\Controller;

use App\Service\ServiceManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ServiceController extends AbstractController
{
    private ServiceManager $serviceManager;

    public function __construct(ServiceManager $serviceManager)
    {
        $this->serviceManager = $serviceManager;
    }


    /**
     * @Route("/service", name="app_get_all_services", methods={"GET"})
     */
    public function getAllInfo(): JsonResponse
    {
        $services = $this->serviceManager->getAllServices();

        return new JsonResponse($services);
    }

    /**
     * @Route("/service", name="app_create_service", methods={"POST"})
     */
    public function createService(Request $request): JsonResponse
    {
        $name = $request->get('name');
        $provider = $request->get('provider');
        $pricePerUnit = $request->get('pricePerUnit');
        $pricePerHumane = $request->get('pricePerHumane');

        $service = $this->serviceManager->createService(
            $name,
            $provider,
            $pricePerUnit,
            $pricePerHumane
        );

        return new JsonResponse(
            ['id' => $service->getId()],
            Response::HTTP_CREATED
        );
    }
}
