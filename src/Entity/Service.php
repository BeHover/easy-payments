<?php

namespace App\Entity;

use App\Repository\ServiceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ServiceRepository::class)
 */
class Service
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
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $provider;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $pricePerUnit;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $pricePerHuman;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getProvider(): ?string
    {
        return $this->provider;
    }

    public function setProvider(string $provider): self
    {
        $this->provider = $provider;

        return $this;
    }

    public function getPricePerUnit(): ?string
    {
        return $this->pricePerUnit;
    }

    public function setPricePerUnit(string $pricePerUnit): self
    {
        $this->pricePerUnit = $pricePerUnit;

        return $this;
    }

    public function getPricePerHuman(): ?string
    {
        return $this->pricePerHuman;
    }

    public function setPricePerHuman(string $pricePerHuman): self
    {
        $this->pricePerHuman = $pricePerHuman;

        return $this;
    }
}
