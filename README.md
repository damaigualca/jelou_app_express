```markdown
# Nombre de la Aplicación

Jelou API - User API

## Estructura del Proyecto

```
    jelou-api/
│
├── src/                    # Código fuente de la aplicación
│   ├── api/                # Definiciones de rutas para la API
│   ├── config/             # Configuraciones, incluyendo la base de datos
│   ├── controllers/        # Controladores para manejar la lógica de negocio
│   ├── models/             # Modelos de datos
│   └── index.js            # Punto de entrada de la aplicación
│
├── main.tf                 # Archivos de configuración de Terraform para infraestructura
│
├── .dockerignore           # Archivo para excluir archivos y carpetas del contexto de Docker
├── .env.example            # Plantilla para las variables de entorno necesarias
├── .gitignore              # Archivo para excluir archivos y carpetas de Git
├── Dockerfile              # Definiciones para construir la imagen Docker de la aplicación
├── docker-compose.yml      # Orquesta el microservicio y la base de datos para el despliegue local
├── Jenkinsfile             # Define el pipeline de Jenkins para CI/CD
├── package.json            # Define las dependencias del proyecto
└── README.md               # Este archivo
```

## Configuración de Entorno

Antes de iniciar la aplicación, crea un archivo `.env` en la raíz del proyecto basándote en `.env.example` y proporciona los valores adecuados para las variables de entorno, incluyendo las credenciales para la conexión a la base de datos.

## Funcionamiento de la Aplicación

La aplicación es un microservicio de gestión de usuarios que permite:

- **Crear un nuevo usuario**: POST `/users`
- **Obtener la información de un usuario existente**: GET `/users/{userId}`
- **Actualizar la información de un usuario existente** (opcional): PUT `/users/{userId}`
- **Eliminar un usuario existente** (opcional): DELETE `/users/{userId}`

## Desarrollo Local

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Instala las dependencias con `npm install`.
2. Configura tus variables de entorno según el archivo `.env.example`.
3. Inicia la aplicación con `npm start` o `node src/index.js`.
4. (Opcional) Para contenerizar la aplicación, asegúrate de tener Docker instalado y ejecuta `docker-compose up --build`.

## Despliegue

El despliegue se gestiona a través de Terraform para la infraestructura en AWS y Jenkins para el pipeline de CI/CD.

1. **Terraform**: Navega a la raiz del sistema (main.tf) `terraform` y ejecuta `terraform init` seguido de `terraform apply` para crear la infraestructura.
2. **Jenkins**: Configura el pipeline en Jenkins utilizando el `Jenkinsfile` proporcionado en la raíz del proyecto.

## Contribuir
admaigualca

## Año
2024
