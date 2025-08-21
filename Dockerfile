FROM node:22.16.0

WORKDIR /app

# Copy package files and install dependencies first for better caching
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of your project files (including main.tsx, App.tsx, etc.)
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]