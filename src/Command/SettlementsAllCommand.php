<?php

namespace App\Command;

use App\Repository\HouseRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class SettlementsAllCommand extends Command
{
    private HouseRepository $repository;

    public function __construct(HouseRepository $repository)
    {
        parent::__construct();

        $this->repository = $repository;
    }

    protected function configure(): void
    {
        $this
            ->setName('settlements:all')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $settlementInfo = $this->repository->getAllSettlementInfo();

        var_dump($settlementInfo);

        return Command::SUCCESS;
    }
}
