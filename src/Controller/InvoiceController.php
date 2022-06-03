<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\InvoiceManager;
use Doctrine\ORM\EntityNotFoundException;
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
     * @Route("/invoice", name="app_get_invoices_by_apartment_id")
     * @throws EntityNotFoundException
     */
    public function getByApartmentId(): JsonResponse
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');
        $user = $this->getUser();
        if (! $user instanceof User) {
            throw new \LogicException('Wrong user interface!');
        }

        $apartmentId = $user->getApartment()->getId();

        $invoices = $this->invoiceManager->getByApartmentId($apartmentId);

        return new JsonResponse($invoices);
    }

    /**
     * @Route("/invoice", methods={"POST"}, name="app_create_invoice")
     * @throws EntityNotFoundException
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
     * @throws EntityNotFoundException
     */
    public function pay(Request $request): JsonResponse
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        $invoices = $request->get('invoices');

        foreach ($invoices as $invoice) {
            $this->invoiceManager->payInvoice($invoice);
        }

        return new JsonResponse([]);
    }
}
