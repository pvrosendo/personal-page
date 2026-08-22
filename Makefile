.DEFAULT_GOAL := help

.PHONY: help install dev check lint build format preview

help: ## Mostra os comandos disponíveis
	@awk 'BEGIN {FS = ":.*## "; printf "Comandos disponíveis:\n"} /^[a-zA-Z0-9_-]+:.*## / {printf "  %-12s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Instala as dependências com pnpm
	pnpm install

dev: ## Inicia o servidor Vite na porta 3000
	pnpm dev

check: ## Executa o typecheck do TypeScript
	pnpm check

lint: ## Executa o Oxlint nos arquivos de src
	pnpm lint

build: ## Executa o typecheck e gera o build de produção
	pnpm build

format: ## Formata o repositório com Biome
	pnpm format

preview: ## Inicia o preview local do build de produção
	pnpm preview
