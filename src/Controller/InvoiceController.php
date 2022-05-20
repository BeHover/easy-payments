<?php

namespace App\Controller;

use App\Service\InvoiceManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InvoiceController extends AbstractController
{
    private InvoiceManager $invoiceManager;

    public function __construct(InvoiceManager $invoiceManager)
    {
        $this->invoiceManager = $invoiceManager;
    }

    /**
     * @Route("/invoice/{apartmentId}", name="app_get_invoices_by_apartment_id")
     * @throws \Doctrine\ORM\EntityNotFoundException
     */
    public function getByApartmentId(int $apartmentId): JsonResponse
    {
        $invoices = $this->invoiceManager->getByApartmentId($apartmentId);

        return new JsonResponse($invoices);
    }

    /**
     * @Route("/invoice", methods={"POST"}, name="app_create_invoice")
     * @throws \Doctrine\ORM\EntityNotFoundException
     */
    public function createInvoice(Request $request): JsonResponse
    {
        $apartmentId = $request->get('apartmentId');
        $serviceId = $request->get('serviceId');
        $value = $request->get('value');

        $invoice = $this->invoiceManager->createInvoice($apartmentId, $serviceId, $value);

        return new JsonResponse(
            ['id' => $invoice->getId()],
            Response::HTTP_CREATED
        );
    }

    /**
     * @Route("/invoice/pay", methods={"POST"}, name="app_pay_invoice")
     */
    public function pay(Request $request): JsonResponse
    {
        $invoiceId = $request->get('invoiceId');

        $this->invoiceManager->payInvoice($invoiceId);

        return new JsonResponse(
            ['id' => $invoiceId]
        );
    }
}
