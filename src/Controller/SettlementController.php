<?php

declare(strict_types=1);

namespace App\Controller;

use App\Repository\HouseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class SettlementController extends AbstractController
{
    /**
     * @Route(path="/settlement", name="all_settlement_info", methods={"GET"})
     */
    public function getAllInfo(
        HouseRepository $repository
    ): JsonResponse {
        $settlements = $repository->getAllSettlementInfo();

        return new JsonResponse($settlements);
    }
}
