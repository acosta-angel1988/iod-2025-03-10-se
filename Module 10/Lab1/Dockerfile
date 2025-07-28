# Base image
FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the app source
COPY . .

# Expose port
EXPOSE 3000


# Start the app
CMD ["npm", "start"]