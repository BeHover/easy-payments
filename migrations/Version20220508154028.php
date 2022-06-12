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
        $services = [
            ['icon' => "\"fas fa-bolt\"", 'name' => "\"Електроенергія\"", 'provider' => "\"Енерго\"", 'pricePerUnit' => 5.0, 'pricePerHuman' => 8.0],
            ['icon' => "\"fas fa-burn\"", 'name' => "\"Газопостачання\"", 'provider' => "\"УКРГАЗ\"", 'pricePerUnit' => 5.0, 'pricePerHuman' => 8.0],
        ];

        $users = [
            ['house_id' => 1, 'tenant_name' => "\"Андрій\"", 'tenant_surname' => "\"Волощинський\"", 'tenant_patronymic' => "\"Дмитрович\"", 'number' => 1, 'password' => "\"$2y\$13\$BAoZStg1M543qa77P64b9u3zRCpo9s41cfzJOVf9j34xLEKtjDRZ2\"", 'uuid' => "\"0012e4d6-9153-4206-9c8c-dded4aa8dfc9\"", 'apartment' => 1],
            ['house_id' => 2, 'tenant_name' => "\"Ігор\"", 'tenant_surname' => "\"Волощинський\"", 'tenant_patronymic' => "\"Андрійович\"", 'number' => 1, 'password' => "\"$2y\$13\$W6UjM3ULXDPKldobSjHPkeUflJSrrs2qxXStYNVtJ6.8Laiuhg0Ci\"", 'uuid' => "\"36bc7597-2c67-4909-8bec-19f22ce5e737\"", 'apartment' => 2],
        ];

        foreach ($services as $service) {
            $this->addSql("INSERT INTO service (icon, name, provider, price_per_human, price_per_unit) VALUES ({$service['icon']}, {$service['name']}, {$service['provider']}, {$service['pricePerHuman']}, {$service['pricePerUnit']})");
        }


        $this->addSql('INSERT INTO district (name) VALUES ("Металургійний")');

        $this->addSql('INSERT INTO house (district_id, street_name, balance_holder, entrances_quantity, apartments_quantity, number) VALUES (1, "пр. Металургів", "Дронов", 3, 25, 1)');
        $this->addSql('INSERT INTO house (district_id, street_name, balance_holder, entrances_quantity, apartments_quantity, number) VALUES (1, "пр. Металургів", "Яценко", 3, 25, 2)');

        foreach ($users as $user) {
            $this->addSql("INSERT INTO apartment (house_id, tenant_name, tenant_surname, tenant_patronymic, number, passport) VALUES ({$user['house_id']}, {$user['tenant_name']}, {$user['tenant_surname']}, {$user['tenant_patronymic']}, {$user['number']}, {$user['password']})");
            $this->addSql("INSERT INTO user (uuid, roles, password, apartment_id) VALUES ({$user['uuid']}, \"[]\", {$user['password']}, {$user['apartment']})");
        }
        $this->addSql('INSERT INTO apartment (house_id, tenant_name, tenant_surname, tenant_patronymic, number, passport) VALUES (1, "Андрій", "Волощинський", "Дмитрович", 1, "83284")');
        $this->addSql('INSERT INTO apartment (house_id, tenant_name, tenant_surname, tenant_patronymic, number, passport) VALUES (2, "Ігор", "Волощинський", "Андрійович", 43, "85484")');

        for ($i = 1; $i < count($users)+1; $i++) {
            foreach ($services as $serviceIndex => $service) {
                $serviceIndex++;
                $this->addSql("INSERT INTO invoice (apartment_id, service_id, value, created_at, is_payed) VALUES ({$i}, {$serviceIndex}, 50, \"2022-04-30 04:43:30\", false)");
            }
        }
    }

    public function down(Schema $schema): void
    {

    }
}
