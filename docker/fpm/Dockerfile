FROM php:7.4-fpm

RUN apt-get update && apt-get install -y libzip-dev && pecl install xdebug-3.1.2

RUN docker-php-ext-install pdo_mysql zip
RUN docker-php-ext-enable xdebug

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
ADD composer.json composer.lock /var/www/symfony/

WORKDIR /var/www/symfony/
CMD composer install;php-fpm