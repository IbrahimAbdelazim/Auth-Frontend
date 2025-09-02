# EasyGenerator Frontend

A modern React application built with TypeScript, Vite, and Tailwind CSS. This frontend provides a comprehensive dashboard interface with authentication, user management, and project analytics.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, and Tailwind CSS
- **Authentication System**: Complete signin/signup flow with JWT token management
- **Protected Routes**: Route-based authentication with automatic redirects
- **Dashboard Analytics**: Interactive dashboard with project statistics and user metrics
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **API Integration**: Axios-based API client with request/response interceptors
- **State Management**: React Query for server state management
- **Form Handling**: React Hook Form for efficient form management
- **Notifications**: Toast notifications for user feedback
- **Docker Support**: Multi-stage Docker build with Nginx for production

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.12
- **State Management**: TanStack React Query 5.85.9
- **Routing**: React Router DOM 7.8.2
- **HTTP Client**: Axios 1.11.0
- **Forms**: React Hook Form 7.62.0
- **Icons**: Lucide React 0.542.0
- **Notifications**: React Toastify 11.0.5

## 📦 Installation

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api/v1/
   VITE_API_HOME=http://localhost:3000
   VITE_APP_NAME=EasyGenerator Frontend
   VITE_APP_VERSION=1.0.0
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and run with default settings
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# With custom environment variables
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1/ docker-compose up --build
```

The application will be available at `http://localhost:3001`

### Manual Docker Build

```bash
# Build the Docker image
docker build -t easygenerator-frontend:1.0.0 .

# Run the container
docker run -p 3001:80 easygenerator-frontend:1.0.0
```

## 📁 Project Structure

```
src/
├── api/                    # API configuration and axios setup
├── components/             # Reusable UI components
│   ├── dashboard/         # Dashboard-specific components
│   ├── Input.tsx          # Form input component
│   └── ProtectedRoute.tsx # Route protection wrapper
├── hooks/                  # Custom React hooks
│   ├── auth/              # Authentication hooks and requests
│   └── user/              # User management hooks and requests
├── pages/                  # Page components
│   ├── Dashboard.tsx      # Main dashboard page
│   ├── NotFound.tsx       # 404 error page
│   ├── Signin.tsx         # Sign in page
│   └── Signup.tsx         # Sign up page
├── types/                  # TypeScript type definitions
├── utils/                  # Utility functions and helpers
├── App.tsx                # Main application component
└── main.tsx               # Application entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🔐 Authentication Flow

The application implements a complete authentication system:

1. **Sign Up**: New users can create accounts with email and password
2. **Sign In**: Existing users can authenticate with their credentials
3. **JWT Tokens**: Access tokens are stored in localStorage
4. **Protected Routes**: Dashboard and other protected pages require authentication
5. **Auto Logout**: Automatic logout on token expiration (401 responses)

## 🎨 UI Components

The application features a modern, responsive design with:

- **Dashboard**: Comprehensive analytics with charts and statistics
- **Forms**: Styled form components with validation
- **Navigation**: Clean sidebar and header navigation
- **Notifications**: Toast notifications for user feedback
- **Icons**: Lucide React icons throughout the interface

## 🌐 API Integration

- **Base URL Configuration**: Environment-based API endpoint configuration
- **Request Interceptors**: Automatic JWT token attachment
- **Response Interceptors**: Error handling and automatic logout
- **Error Handling**: Centralized error display with toast notifications

## 🚀 Deployment

### Production Environment Variables

```env
VITE_API_BASE_URL=https://your-api-domain.com/api/v1/
VITE_API_HOME=https://your-api-domain.com
NODE_ENV=production
VITE_APP_NAME=EasyGenerator Frontend
VITE_APP_VERSION=1.0.0
```

### Nginx Configuration

The application uses a custom Nginx configuration for optimal production serving with:
- Gzip compression
- Static file caching
- SPA routing support
- Security headers

## 📝 Development Guidelines

### Code Quality

- **ESLint**: Configured with React and TypeScript rules
- **TypeScript**: Strict type checking enabled
- **File Organization**: Feature-based folder structure
- **Component Patterns**: Functional components with hooks

### Best Practices

- Use React Query for server state management
- Implement proper error boundaries
- Follow React Hook Form patterns for forms
- Use TypeScript interfaces for type safety
- Implement responsive design with Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.
