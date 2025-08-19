# :earth_americas: TripSmith

**TripSmith** é um planejador inteligente de viagens que integra múltiplas APIs (Google Maps, Google Places, Skyscanner, Booking, OpenAI) para gerar roteiros personalizados de curta, média ou longa duração.

O objetivo inicial é construir um **MVP funcional**, explorando desde a concepção da ideia até a operação, passando por arquitetura, decisões técnicas e documentação — demonstrando habilidades de engenharia de software em um projeto end-to-end.

---

## :rocket: Stack Tecnológica

- **Frontend**: [Next.js](https://nextjs.org/) + [TailwindCSS](https://tailwindcss.com/) + TypeScript
- **Backend**: [Node.js](https://nodejs.org/) + [NestJS](https://nestjs.com/)
- **Banco de Dados**: PostgreSQL
- **DevOps**: Docker, CI/CD com GitHub Actions (planejado), Kubernetes (estudo futuro)

---

## :open_file_folder: Estrutura Inicial

- `schema.json` → contrato inicial de dados (validação via [AJV](https://ajv.js.org/))
- `docs/` → documentação do projeto (roadmap, wireframes, decisões de arquitetura)
- `frontend/` → código do cliente (Next.js)
- `backend/` → API em NestJS

---

## :calendar: Roadmap MVP

1. **Definir contrato de dados** (✅ concluído: `schema.json`)
2. Mock de dados + integração fake entre front/back
3. Persistência em PostgreSQL + infraestrutura em Docker
4. Integração inicial com APIs externas
5. Ajustes de UX + preparação para beta

---

## :handshake: Contribuição

O projeto está sendo desenvolvido como parte de um portfólio acadêmico em **Engenharia de Software**.  
Contribuições, feedbacks e ideias são bem-vindos!

---

## :scroll: Licença

[MIT](LICENSE)
