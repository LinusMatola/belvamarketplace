# Use the official Node.js image.
# https://hub.docker.com/_/node

# Stage 1: Build the Next.js application
FROM node:18-alpine as build

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

# Copy the build files from the previous stage
COPY --from=build /app/.next /usr/share/nginx/html

# Copy the public files
COPY --from=build /app/public /usr/share/nginx/html

#COPY defaultNginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
