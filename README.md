# دفتر پیشخوان دولت احمدی
## Government Service Center Platform

یک پلتفرم دیجیتال مدرن برای ارائه خدمات دولتی به شهروندان

A modern digital platform for providing government services to citizens.

## 🎯 Features

- ✅ Service Discovery & Booking
- ✅ Online Request Submission
- ✅ Appointment Scheduling
- ✅ Real-time Request Tracking
- ✅ Document Management
- ✅ User Reviews & Ratings
- ✅ News & Announcements
- ✅ Admin & Super Admin Panels
- ✅ Role-Based Access Control
- ✅ Two-Factor Authentication
- ✅ Multi-language Support (Persian/English)
- ✅ Dark/Light Mode
- ✅ Mobile First Design

## 🏗️ Tech Stack

### Frontend
- Next.js 15+
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- React Query
- Zustand

### Backend
- NestJS
- TypeORM
- PostgreSQL
- JWT Authentication
- AWS S3

### DevOps
- Docker & Docker Compose
- Nginx
- PostgreSQL

## 📁 Project Structure

```
├── frontend/                 # Next.js Application
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   └── public/
├── backend/                  # NestJS Application
│   ├── src/
│   │   ├── modules/
│   │   ├── common/
│   │   ├── guards/
│   │   ├── decorators/
│   │   └── main.ts
│   └── docker/
├── docker-compose.yml
├── nginx/
└── docs/
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- PostgreSQL 14+

### Development Setup

```bash
# Clone repository
git clone https://github.com/akauunt4-del/govt-service-center.git
cd govt-service-center

# Copy environment variables
cp .env.example .env.local

# Start with Docker Compose
docker-compose up -d

# Install frontend dependencies
cd frontend
npm install
npm run dev

# In another terminal, install backend dependencies
cd ../backend
npm install
npm run start:dev
```

### Access Points
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Database: localhost:5432

## 📚 Documentation

See `/docs` directory for:
- API Documentation
- Database Schema
- Component Library
- Deployment Guide

## 🔐 Security

- JWT Authentication with Refresh Tokens
- Role-Based Access Control (RBAC)
- Two-Factor Authentication (2FA)
- Rate Limiting
- CSRF Protection
- XSS Protection
- Secure File Upload
- Audit Logging

## 📄 License

MIT License
