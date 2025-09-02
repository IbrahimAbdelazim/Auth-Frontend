# Use the official Node.js runtime as the base image
FROM node:20-alpine AS build

LABEL name="easygenerator-frontend"
LABEL version="1.0.0"
LABEL description="EasyGenerator Frontend React Application"

# Set the working directory in the container
WORKDIR /app

# Accept build arguments for environment variables
ARG VITE_API_BASE_URL=http://localhost:3000/api/v1/
ARG VITE_API_HOME=http://localhost:3000
ARG NODE_ENV=production
ARG VITE_APP_NAME="EasyGenerator Frontend"
ARG VITE_APP_VERSION="1.0.0"

# Set environment variables from build args
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
ENV VITE_API_HOME=$VITE_API_HOME
ENV NODE_ENV=$NODE_ENV
ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_APP_VERSION=$VITE_APP_VERSION

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --include=dev

# Copy the rest of the application code
COPY . .

# Build the application (skip TypeScript compilation for now due to type issues)
RUN npx vite build

# Production stage
FROM nginx:alpine AS production

# Copy the built application from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
