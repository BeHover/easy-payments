<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\HouseRepository;
use Doctrine\Common\Collections\Collection;
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
    private $streetName;

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

    /**
     * @ORM\ManyToOne(targetEntity=District::class, inversedBy="houses")
     */
    private $district;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $number;

    /**
     * @ORM\OneToMany(targetEntity=Apartment::class, mappedBy="house")
     */
    private $apartments;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreetName(): ?string
    {
        return $this->streetName;
    }

    public function setStreetName(string $streetName): self
    {
        $this->streetName = $streetName;

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

    public function getDistrict(): ?District
    {
        return $this->district;
    }

    public function setDistrict(District $district): self
    {
        $this->district = $district;

        return $this;
    }

    /**
     * @return Collection|Apartment[]
     */
    public function getApartments(): Collection
    {
        return $this->apartments;
    }

    public function addApartment(Apartment $apartment): self
    {
        if (!$this->apartments->contains($apartment)) {
            $this->apartments[] = $apartment;
            $apartment->setHouse($this);
        }

        return $this;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }
}
