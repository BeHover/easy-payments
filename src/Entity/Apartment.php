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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tenantName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tenantSurname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $tenantPatronymic;

    /**
     * @ORM\Column(type="integer", nullable=false)
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
     * @ORM\OneToMany(targetEntity=Invoice::class, mappedBy="apartment")
     */
    private $invoices;

    /**
     * @ORM\OneToMany(targetEntity=Meter::class, mappedBy="apartment")
     */
    private $meters;

    public function __construct()
    {
        $this->invoices = new ArrayCollection();
        $this->meters = new ArrayCollection();
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
     * @return Collection|Invoice[]
     */
    public function getInvoices(): Collection
    {
        return $this->invoices;
    }

    public function addInvoice(Invoice $invoice): self
    {
        if (! $this->invoices->contains($invoice)) {
            $this->invoices[] = $invoice;
            $invoice->setApartment($this);
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

    /**
     * @return Collection<int, Meter>
     */
    public function getMeters(): Collection
    {
        return $this->meters;
    }

    public function addMeter(Meter $meter): self
    {
        if (! $this->meters->contains($meter)) {
            $this->meters[] = $meter;
            $meter->setApartment($this);
        }

        return $this;
    }

    public function removeMeter(Meter $meter): self
    {
        if ($this->meters->removeElement($meter)) {
            // set the owning side to null (unless already changed)
            if ($meter->getApartment() === $this) {
                $meter->setApartment(null);
            }
        }

        return $this;
    }
}
