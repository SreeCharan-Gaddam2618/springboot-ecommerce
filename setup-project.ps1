param([string]$ProjectPath = ".\ecommerce-springboot-fullstack")
$ErrorActionPreference = "Stop"
function Test-Command($name) { return $null -ne (Get-Command $name -ErrorAction SilentlyContinue) }
Write-Host "=== Java Spring Boot E-Commerce setup ===" -ForegroundColor Cyan
foreach ($cmd in @("java","mvn","node","npm","git")) { if (-not (Test-Command $cmd)) { Write-Host "Missing command: $cmd" -ForegroundColor Red; exit 1 } }
if (Test-Command "docker") { Write-Host "Docker detected." -ForegroundColor Green } else { Write-Host "Docker not detected; continuing without Docker." -ForegroundColor Yellow }
$base = (Resolve-Path ".").Path
Push-Location (Join-Path $base "backend")
mvn clean test
Pop-Location
Push-Location (Join-Path $base "frontend")
npm install
npm run build
Pop-Location
if (Test-Command "docker") { docker compose build; docker compose up -d postgres backend }
Write-Host "Setup complete. Frontend: npm run dev in frontend. Backend: http://localhost:8080" -ForegroundColor Green
