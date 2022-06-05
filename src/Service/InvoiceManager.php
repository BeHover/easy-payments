<?php

declare(strict_types=1);

namespace App\Service;

use App\Entity\Invoice;
use App\Repository\ApartmentRepository;
use App\Repository\InvoiceRepository;
use App\Repository\ServiceRepository;
use Doctrine\ORM\EntityNotFoundException;
use LogicException;

class InvoiceManager
{
    private InvoiceRepository $invoiceRepository;
    private ApartmentRepository $apartmentRepository;
    private ServiceRepository $serviceRepository;

    public function __construct(
        InvoiceRepository $invoiceRepository,
        ApartmentRepository $apartmentRepository,
        ServiceRepository $serviceRepository
    ) {
        $this->invoiceRepository = $invoiceRepository;
        $this->apartmentRepository = $apartmentRepository;
        $this->serviceRepository = $serviceRepository;
    }

    /**
     * @throws LogicException
     */
    public function getByApartmentId(int $apartmentId): array
    {
        if (!$this->isApartmentExists($apartmentId)) {
            throw new LogicException("Apartment with id: $apartmentId not found!");
        }

        return $this->invoiceRepository->getNotPayedByApartmentId($apartmentId);
    }

    /**
     * @throws LogicException
     */
    public function createInvoice(
        int $apartmentId,
        int $serviceId,
        int $value
    ): Invoice {
        $apartment = $this->apartmentRepository->find($apartmentId);
        $service = $this->serviceRepository->find($serviceId);

        if (null === $apartment) {
            throw new LogicException("Apartment with id: $apartmentId not found!");
        }

        if (null === $service) {
            throw new LogicException("Service with id: $serviceId not found!");
        }

        return new Invoice($apartment, $service, $value);
    }

    /**
     * @throws EntityNotFoundException
     */
    public function payInvoice(
        int $invoiceId
    ): void {
        $invoice = $this->invoiceRepository->find($invoiceId);

        if (null === $invoice) {
            throw new EntityNotFoundException("Invoice with id: $invoiceId not found!");
        }

        $invoice->makePayed();
    }

    private function isApartmentExists(int $apartmentId): bool
    {
        if (null === $this->apartmentRepository->find($apartmentId)) {
            return false;
        }

        return true;
    }

    private function isServiceExists(int $serviceId): bool
    {
        if (null === $this->serviceRepository->find($serviceId)) {
            return false;
        }

        return true;
    }
}