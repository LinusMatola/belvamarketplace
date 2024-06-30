# Use the official Node.js image
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

# Production stage
FROM node:18-alpine as production

# Set working directory
WORKDIR /app

# Copy the build files and node_modules from the build stage
COPY --from=build /app ./

# Install only production dependencies
RUN npm install --only=production

# Set environment variables
ENV NODE_ENV=production
ENV CLERK_PUBLISHABLE_KEY=pk_test_cHJvbXB0LW1lZXJrYXQtOC5jbGVyay5hY2NvdW50cy5kZXYk
# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
