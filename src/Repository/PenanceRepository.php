<?php

namespace App\Repository;

use App\Entity\Penance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Penance|null find($id, $lockMode = null, $lockVersion = null)
 * @method Penance|null findOneBy(array $criteria, array $orderBy = null)
 * @method Penance[]    findAll()
 * @method Penance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PenanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Penance::class);
    }

    // /**
    //  * @return Penance[] Returns an array of Penance objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Penance
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
