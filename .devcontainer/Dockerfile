# Use a Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port our Vue app will run on
EXPOSE 8080

# Command to run when the container starts (optional, can be overridden)
# CMD ["npm", "run", "dev"]