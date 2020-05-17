# The shell we use
SHELL := /bin/bash

# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

# Vars
NAME = vp
DEV-NAME = $(NAME)-dev
VERSION := $(shell cat VERSION)
DOCKER := $(bash docker)

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: ## Build production image
	@docker build --no-cache=true -t $(NAME) -f Dockerfile .

.PHONY: test-prod-env
test-prod-env: ## Build test container (docs only) of prod-env
	@docker build --no-cache=true -t $(NAME)-env-test -f Dockerfile . --target=build-env

.PHONY: dev-build
dev-build: ## Build local development container
	@docker build -t $(DEV-NAME) -f Dockerfile.dev .

.PHONY: docker-lint
docker-lint: ## Run hadolint against Dockerfile
	@echo "$(YELLOW)==> Linting Dockerfile.dev$(RESET)"
	@docker run --rm -i hadolint/hadolint hadolint --ignore DL3018 - < Dockerfile.dev
	@echo "$(YELLOW)==> Linting Dockerfile.prod$(RESET)"
	@docker run --rm -i hadolint/hadolint hadolint --ignore DL3018 - < Dockerfile

.PHONY: serve
serve: ## Local server for dev
	@echo "$(YELLOW)==> Starting local serve mode$(RESET)"
	@docker-compose up

.PHONY: clean
clean: ## Cleaning up after docker-compose
	@docker-compose down

.PHONY: run-prod
run-prod: ## Start prod container locally & open site in Chrome
	@echo "$(YELLOW)==> Please open your browser localhost:8080$(RESET)"
	@docker run --rm -p 8080:8080 --name vp-prod $(NAME):latest
