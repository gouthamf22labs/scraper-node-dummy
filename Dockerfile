FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies (if any, else skip)
RUN npm install || echo "No dependencies to install"

# Copy application code
COPY . .

# Command to run the Node.js script
CMD ["node", "index.js"]
