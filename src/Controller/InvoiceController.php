<?php

declare(strict_types=1);

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
     * @Route("/invoice", name="app_get_invoices_by_apartment_id", methods={"GET"})
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
        $requestData = $request->toArray();
        $apartmentId = $requestData['apartmentId'];
        $serviceId = $requestData['serviceId'];
        $value = $requestData['value'];

        $invoice = $this->invoiceManager->createInvoice($apartmentId, $serviceId, $value);

        return new JsonResponse(
            [
                'id' => $invoice->getId(),
            ],
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
        $user = $this->getUser();
        if (! $user instanceof User) {
            throw new \LogicException('Wrong user interface!');
        }

        $apartmentId = $user->getApartment()->getId();
        $requestData = $request->toArray();

        $requestInvoicesIds = $requestData['invoices'];
        $userInvoicesIds = array_map(
            fn ($invoice) => $invoice['id'],
            $this->invoiceManager->getByApartmentId($apartmentId)
        );

        if (array_diff($requestInvoicesIds, $userInvoicesIds)) {
            throw new \LogicException("There are no invoice for this user with provided ids!");
        }

        foreach ($requestInvoicesIds as $invoiceId) {
            $this->invoiceManager->payInvoice($invoiceId);
        }

        return new JsonResponse([]);
    }
}
