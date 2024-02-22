# Utiliza una imagen base oficial de Node.js como punto de partida
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de definición de dependencias
COPY package*.json ./

# Instala las dependencias de tu proyecto
RUN npm install

# Copia el resto del código fuente de tu aplicación al contenedor
COPY . .

# Expone el puerto en el que tu aplicación se ejecutará dentro del contenedor
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD ["node", "src/index.js"]
