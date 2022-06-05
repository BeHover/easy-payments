<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Invoice;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Invoice|null find($id, $lockMode = null, $lockVersion = null)
 * @method Invoice|null findOneBy(array $criteria, array $orderBy = null)
 * @method Invoice[]    findAll()
 * @method Invoice[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InvoiceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Invoice::class);
    }

    public function getNotPayedByApartmentId(int $apartmentId): array
    {
        return $this->createQueryBuilder('i')
            ->select('i, s')
            ->innerJoin('i.apartment', 'a')
            ->innerJoin('i.service', 's')
            ->where('a.id = :apartmentId')
            ->andWhere('i.isPayed = :isPayed')
            ->setParameter('apartmentId', $apartmentId)
            ->setParameter('isPayed', false)
            ->getQuery()
            ->getArrayResult();
    }

    public function save(Invoice $invoice): void
    {
        $this->getEntityManager()->persist($invoice);
        $this->update();
    }

    public function update(): void
    {
        $this->getEntityManager()->flush();
    }
}
