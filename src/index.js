import express from 'express';
const app = express();

// Importar rutas de usuario
import userRoutes from './api/user.js';

// Middleware para procesar JSON
app.use(express.json());

// Rutas para usuarios
app.use('/api', userRoutes);

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Puerto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
