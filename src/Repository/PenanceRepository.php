<?php

declare(strict_types=1);

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
}
