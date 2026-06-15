const express = require('express');
const app = express();

// Middleware necesario para que el servidor pueda entender archivos JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetro dinámico
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta para recibir reportes
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
