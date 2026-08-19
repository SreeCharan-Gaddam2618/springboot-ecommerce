# Full-Stack Java Spring Boot E-Commerce

Production-oriented portfolio e-commerce starter using Java 21, Spring Boot 3.5.16, PostgreSQL, Flyway, JWT, React/Vite, Docker, Razorpay integration foundations, image upload, and CI.

## Features
- Customer registration/login and JWT authentication
- CUSTOMER / ADMIN roles
- Product catalog, categories, search and pagination
- Cart, wishlist, addresses and orders
- Admin product/order management foundation
- Razorpay server-side order creation and signature verification
- Flyway-managed PostgreSQL schema
- Image upload endpoint with persistent Docker volume
- Swagger/OpenAPI
- Docker Compose and Render configuration
- GitHub Actions CI

## Requirements
- JDK 21
- Maven 3.9+
- Node.js 20.19+
- npm
- Docker Desktop
- Git

## Windows automatic setup
```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\setup-project.ps1
```

## Manual run
Backend:
```powershell
cd backend
mvn spring-boot:run
```
Frontend:
```powershell
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:8080
Swagger: http://localhost:8080/swagger-ui.html

## Docker
```powershell
docker compose up --build
```

## Default admin
```text
admin@example.com / Admin@123
```
Change this immediately before production use.

## Environment
Copy `.env.example` for local development and configure production values from `.env.production.example`. Never commit secrets.

## Production hardening
Use managed PostgreSQL, HTTPS, strong secrets, restricted CORS, payment webhooks, object storage/CDN for images, rate limiting/WAF, monitoring, backups, dependency scanning, and end-to-end payment tests before accepting real money.
