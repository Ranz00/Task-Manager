# Task Manager (Laravel + JS + Tailwind)

A simple **full stack task manager** built with **Laravel (backend API)** and **Vanilla JavaScript + TailwindCSS (frontend)**.  
This project demonstrates how to create a small but complete application with a REST API, database, and a styled user interface.

---

## Features
- Create, list, update, and delete tasks
- Mark tasks as completed (with line-through style)
- REST API built with Laravel (MVC pattern)
- Frontend built with HTML, TailwindCSS, and Vanilla JS
- SQLite database for easy setup
- Seeder with demo tasks

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/USERNAME/task-manager.git
cd task-manager

# 2. Backend setup (Laravel)
cd backend
composer install
cp .env.example .env
php artisan key:generate

# Configure .env to use SQLite:
# DB_CONNECTION=sqlite
# DB_DATABASE=/absolute/path/to/backend/database/database.sqlite

mkdir -p database && touch database/database.sqlite

# Run migrations + seed demo tasks
php artisan migrate --seed

# Start the API server
php artisan serve
# → API available at http://localhost:8000/api/tasks

# 3. Frontend setup
cd ../frontend
# Just open index.html in your browser
