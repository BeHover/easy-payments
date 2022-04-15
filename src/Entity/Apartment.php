<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ApartmentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApartmentRepository::class)
 */
class Apartment
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
    private $tenantName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $tenantSurname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $tenantPatronymic;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $number;

    /**
     * @ORM\ManyToOne(targetEntity=House::class, inversedBy="apartments")
     */
    private $house;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $passport;

    /**
     * @ORM\OneToMany(targetEntity=Penance::class, mappedBy="apartment")
     */
    private $penances;

    public function __construct()
    {
        $this->penances = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTenantName(): ?string
    {
        return $this->tenantName;
    }

    public function setTenantName(string $tenantName): self
    {
        $this->tenantName = $tenantName;

        return $this;
    }

    public function getTenantSurname(): ?string
    {
        return $this->tenantSurname;
    }

    public function setTenantSurname(string $tenantSurname): self
    {
        $this->tenantSurname = $tenantSurname;

        return $this;
    }

    public function getTenantPatronymic(): ?string
    {
        return $this->tenantPatronymic;
    }

    public function setTenantPatronymic(string $tenantPatronymic): self
    {
        $this->tenantPatronymic = $tenantPatronymic;

        return $this;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(?int $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getPassport(): ?string
    {
        return $this->passport;
    }

    public function setPassport(string $passport): self
    {
        $this->passport = $passport;

        return $this;
    }

    /**
     * @return Collection|Penance[]
     */
    public function getPenances(): Collection
    {
        return $this->penances;
    }

    public function addPenance(Penance $penance): self
    {
        if (!$this->penances->contains($penance)) {
            $this->penances[] = $penance;
            $penance->setApartment($this);
        }

        return $this;
    }

    public function getHouse(): ?House
    {
        return $this->house;
    }

    public function setHouse(House $house): self
    {
        $this->house = $house;

        return $this;
    }
}
