<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\District;
use App\Entity\House;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method House|null find($id, $lockMode = null, $lockVersion = null)
 * @method House|null findOneBy(array $criteria, array $orderBy = null)
 * @method House[]    findAll()
 * @method House[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class HouseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, House::class);
    }

    public function getAllSettlementInfo()
    {
        return $this->createQueryBuilder('h')
            ->innerJoin(District::class, 'd')
            ->getQuery()
            ->getResult();
    }
}
