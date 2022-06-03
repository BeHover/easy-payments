<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220508154028 extends AbstractMigration
{
    public function up(Schema $schema): void
    {
        $this->addSql('INSERT INTO district (name) VALUES ("Металургійний")');

        $this->addSql('INSERT INTO house (district_id, street_name, balance_holder, entrances_quantity, apartments_quantity, number) VALUES (1, "пр. Металургів", "Дронов", 3, 25, 1)');
        $this->addSql('INSERT INTO house (district_id, street_name, balance_holder, entrances_quantity, apartments_quantity, number) VALUES (1, "пр. Металургів", "Яценко", 3, 25, 2)');

        $this->addSql('INSERT INTO apartment (house_id, tenant_name, tenant_surname, tenant_patronymic, number, passport) VALUES (1, "Андрій", "Волощинський", "Дмитрович", 1, "83284")');
        $this->addSql('INSERT INTO apartment (house_id, tenant_name, tenant_surname, tenant_patronymic, number, passport) VALUES (2, "Ігор", "Волощинський", "Андрійович", 43, "85484")');

        $this->addSql('INSERT INTO service (name, provider, price_per_human, price_per_unit) VALUES ("Екоспецтранс", "Екоспецтранс", 5.0, 8.0)');
        $this->addSql('INSERT INTO service (name, provider, price_per_human, price_per_unit) VALUES ("Криворіжгаз", "Криворіжгаз", 5.0, 8.0)');
    }

    public function down(Schema $schema): void
    {

    }
}
