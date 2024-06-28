# Stage 1: Build the React application
FROM node:20-alpine3.18 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using nginx
FROM nginx:alpine

# Copy the build files from the previous stage if they exist, otherwise log an error
RUN mkdir -p /usr/share/nginx/html && \
    if [ -d /app/build ]; then \
        cp -r /app/build/* /usr/share/nginx/html/; \
    else \
        echo "Build directory does not exist"; \
    fi

# Copy custom nginx configuration
COPY defaultNginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
