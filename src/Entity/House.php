<?php

namespace App\Entity;

use App\Repository\HouseRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=HouseRepository::class)
 */
class House
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $address;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $balanceHolder;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $entrancesQuantity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $apartmentsQuantity;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getBalanceHolder(): ?string
    {
        return $this->balanceHolder;
    }

    public function setBalanceHolder(string $balanceHolder): self
    {
        $this->balanceHolder = $balanceHolder;

        return $this;
    }

    public function getEntrancesQuantity(): ?int
    {
        return $this->entrancesQuantity;
    }

    public function setEntrancesQuantity(?int $entrancesQuantity): self
    {
        $this->entrancesQuantity = $entrancesQuantity;

        return $this;
    }

    public function getApartmentsQuantity(): ?int
    {
        return $this->apartmentsQuantity;
    }

    public function setApartmentsQuantity(?int $apartmentsQuantity): self
    {
        $this->apartmentsQuantity = $apartmentsQuantity;

        return $this;
    }
}
