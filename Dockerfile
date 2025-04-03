FROM node:18-alpine

WORKDIR /home/app

# Primero copia solo los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias en el entorno Alpine Linux
RUN npm ci

# Ahora copia el resto del código fuente (excepto lo ignorado en .dockerignore)
COPY . .

EXPOSE 3333

CMD [ "npm", "run", "dev" ]
