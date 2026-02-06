> ⚠️ **EM DESENVOLVIMENTO**
>  
> Este projeto está em evolução contínua. Novos microserviços, integrações e melhorias arquiteturais estão sendo implementados progressivamente com foco em ambientes de produção.

# Sleepr — Distributed Booking Platform

Plataforma de reservas construída com **NestJS** utilizando **arquitetura de microserviços**, projetada para explorar **escalabilidade**, **resiliência** e **boas práticas de sistemas distribuídos**.

O projeto simula um backend real de produção, abordando desafios comuns de aplicações modernas como comunicação assíncrona, segurança, observabilidade e automação de deploy.

---

## 🎯 Objetivo do Projeto

Construir uma aplicação backend **production-grade**, indo além de CRUDs tradicionais e abordando cenários reais de mercado, como:

- Comunicação entre microserviços
- Processamento assíncrono e orientado a eventos
- Autenticação e autorização distribuídas
- Observabilidade e logging estruturado
- Deploy automatizado em ambientes cloud
- Escalabilidade horizontal e isolamento de responsabilidades

O foco do projeto é **arquitetura, decisões técnicas e maturidade de sistema**, não apenas funcionalidade.

---

## 🏗️ Arquitetura (Em Evolução)

A plataforma é organizada como um **monorepo**, com múltiplos microserviços independentes e uma biblioteca comum para compartilhamento de código crítico.

### Microserviços planejados

- **Reservations Service**
  - Gerenciamento de reservas
  - Validação de períodos e disponibilidade
  - Orquestração com pagamentos

- **Auth Service**
  - Autenticação baseada em JWT
  - Controle de papéis e permissões
  - Guards e estratégias reutilizáveis

- **Payments Service**
  - Integração com Stripe
  - Processamento assíncrono de pagamentos
  - Estratégias de retry e consistência

- **Notifications Service**
  - Envio de emails
  - Comunicação baseada em eventos
  - Processamento assíncrono com mensageria

- **API Gateway**
  - Exposição unificada da API
  - Integração via GraphQL (Apollo Federation)
  - Roteamento e agregação de dados

---

## 🧱 Pilares Técnicos

- **Arquitetura de Microserviços**
- **Separação clara de responsabilidades**
- **Código compartilhado via biblioteca comum**
- **Mensageria e comunicação assíncrona**
- **Segurança e autenticação distribuída**
- **Observabilidade e logs estruturados**
- **Automação de build e deploy**
- **Infraestrutura baseada em containers**

---

## 🚀 Roadmap Técnico

Funcionalidades e integrações planejadas para evolução do projeto:

- [ ] Autenticação com JWT e controle de papéis
- [ ] Comunicação entre serviços via TCP / gRPC
- [ ] Mensageria com RabbitMQ
- [ ] Integração com Stripe para pagamentos
- [ ] API Gateway com GraphQL e Apollo Federation
- [ ] Observabilidade (health checks, logging, métricas)
- [ ] CI/CD automatizado
- [ ] Deploy em Kubernetes (GKE / EKS)
- [ ] Balanceamento de carga e ingress

---

## 🛠️ Stack Principal

- **Node.js / TypeScript**
- **NestJS**
- **MongoDB / PostgreSQL / MySQL**
- **Docker & Docker Compose**
- **RabbitMQ**
- **JWT / Auth Guards**
- **Stripe**
- **GraphQL (Apollo Federation)**
- **Kubernetes**
- **CI/CD**

---

## 📌 Observação

Este projeto é utilizado como base para **estudo aprofundado de arquitetura backend**, simulando decisões e desafios encontrados em ambientes reais de produção.
