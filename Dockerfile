# Stage 1: Build the Next js application
FROM node:14 as build

# Set working directory
WORKDIR /prod

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
COPY --from=build /prod/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY defaultNginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
