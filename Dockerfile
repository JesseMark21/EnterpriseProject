# Example Dockerfile setup
FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Make sure the following lines are included if they were missed previously
COPY src ./src
COPY public ./public

EXPOSE 8080

CMD ["npm", "run", "build"]
