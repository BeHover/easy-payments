<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220206151956 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE apartment (id INT AUTO_INCREMENT NOT NULL, tenant_name VARCHAR(255) NOT NULL, tenant_surname VARCHAR(255) NOT NULL, tenant_patronymic VARCHAR(255) NOT NULL, number INT DEFAULT NULL, passport VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE district (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE house (id INT AUTO_INCREMENT NOT NULL, address VARCHAR(255) NOT NULL, balance_holder VARCHAR(255) NOT NULL, entrances_quantity INT DEFAULT NULL, apartments_quantity INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE penance (id INT AUTO_INCREMENT NOT NULL, apartment_id INT DEFAULT NULL, service_id INT DEFAULT NULL, value INT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_BDE4836F176DFE85 (apartment_id), INDEX IDX_BDE4836FED5CA9E6 (service_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, provider VARCHAR(255) NOT NULL, price_per_unit NUMERIC(10, 2) NOT NULL, price_per_human NUMERIC(10, 2) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, apartment_id INT DEFAULT NULL, uuid VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649D17F50A6 (uuid), UNIQUE INDEX UNIQ_8D93D649176DFE85 (apartment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE penance ADD CONSTRAINT FK_BDE4836F176DFE85 FOREIGN KEY (apartment_id) REFERENCES apartment (id)');
        $this->addSql('ALTER TABLE penance ADD CONSTRAINT FK_BDE4836FED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649176DFE85 FOREIGN KEY (apartment_id) REFERENCES apartment (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE penance DROP FOREIGN KEY FK_BDE4836F176DFE85');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649176DFE85');
        $this->addSql('ALTER TABLE penance DROP FOREIGN KEY FK_BDE4836FED5CA9E6');
        $this->addSql('DROP TABLE apartment');
        $this->addSql('DROP TABLE district');
        $this->addSql('DROP TABLE house');
        $this->addSql('DROP TABLE penance');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE user');
    }
}
