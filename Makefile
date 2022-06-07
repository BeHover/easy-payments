.PHONY: start stop rm shell vendor cs stan ecs ecs-fix

dc_bin := $(shell command -v docker-compose 2> /dev/null)
dc_app_name = fpm_easy_payments

DOCKER_COMPOSE=$(dc_bin)
PHP=php

start:
	${DOCKER_COMPOSE} up -d

stop:
	$(DOCKER_COMPOSE) stop

rm:
	$(DOCKER_COMPOSE) down

shell:
	$(DOCKER_COMPOSE) exec $(dc_app_name) bash

vendor:
	$(DOCKER_COMPOSE) exec $(dc_app_name) composer install

cs: stan ecs

stan:
	$(DOCKER_COMPOSE) exec $(dc_app_name) ./vendor/bin/phpstan analyze src tests --level 8

ecs:
	$(DOCKER_COMPOSE) exec $(dc_app_name) ./vendor/bin/ecs check src tests

ecs-fix:
	$(DOCKER_COMPOSE) exec $(dc_app_name) ./vendor/bin/ecs check src tests --fix