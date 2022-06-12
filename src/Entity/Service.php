<?php

declare(strict_types=1);

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

    public function __construct(
        string $name,
        string $provider,
        float $pricePerUnit,
        float $pricePerHuman
    ) {
        $this->name = $name;
        $this->provider = $provider;
        $this->pricePerUnit = $pricePerUnit;
        $this->pricePerHuman = $pricePerHuman;
    }

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

    public function getPricePerUnit(): ?float
    {
        return (float) $this->pricePerUnit;
    }

    public function setPricePerUnit(float $pricePerUnit): self
    {
        $this->pricePerUnit = $pricePerUnit;

        return $this;
    }

    public function getPricePerHuman(): ?float
    {
        return (float) $this->pricePerHuman;
    }

    public function setPricePerHuman(float $pricePerHuman): self
    {
        $this->pricePerHuman = $pricePerHuman;

        return $this;
    }
}
