const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'vitrina_db'
// });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MySQL');
});

// =======================
// RUTAS DE MODELOS
// =======================

// Obtener todos los modelos
app.get('/modelos', (req, res) => {
  db.query('SELECT * FROM modelos', (err, results) => {
    if (err) {
      console.error('Error al consultar modelos:', err);
      return res.status(500).json({ error: 'Error al obtener modelos' });
    }
    res.json(results);
  });
});

// Crear un nuevo modelo
app.post('/modelos', (req, res) => {
  const { nombre, descripcion, imagen } = req.body;
  const sql = 'INSERT INTO modelos (nombre, descripcion, imagen) VALUES (?, ?, ?)';
  db.query(sql, [nombre, descripcion, imagen], (err, result) => {
    if (err) {
      console.error('Error al insertar modelo:', err);
      return res.status(500).send(err);
    }
    res.status(201).json({ id: result.insertId, nombre, descripcion, imagen });
  });
});

// Actualizar un modelo existente
app.put('/modelos/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, imagen } = req.body;
  const sql = 'UPDATE modelos SET nombre = ?, descripcion = ?, imagen = ? WHERE id = ?';
  db.query(sql, [nombre, descripcion, imagen, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar modelo:', err);
      return res.status(500).send(err);
    }
    res.json({ id, nombre, descripcion, imagen });
  });
});

// Eliminar un modelo
app.delete('/modelos/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM modelos WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar modelo:', err);
      return res.status(500).send(err);
    }
    res.status(204).send(); // No content
  });
});

// Obtener imágenes del carrusel
app.get('/carousel', (req, res) => {
  const sql = 'SELECT * FROM carousel';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Ruta para recibir contacto
app.post('/contacto', (req, res) => {
  const { nombre, apellido, telefono, email, comentario } = req.body;

  if (!nombre || !apellido || !email) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  const sql = 'INSERT INTO contacto (nombre, apellido, telefono, email, comentario) VALUES (?, ?, ?, ?, ?)';
  const values = [nombre, apellido, telefono, email, comentario];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al guardar contacto', details: err });
    res.status(201).json({ message: 'Contacto guardado correctamente', id: result.insertId });
  });
});

app.post('/presupuestos', (req, res) => {
  const { nombre, apellido, telefono, email, servicio, detalles } = req.body;

  if (!nombre || !apellido || !telefono || !email || !servicio || !detalles) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const query = `
    INSERT INTO presupuesto (nombre, apellido, telefono, email, servicio, detalles)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [nombre, apellido, telefono, email, servicio, detalles], (err, result) => {
    if (err) {
      console.error('Error al insertar presupuesto:', err);
      return res.status(500).json({ error: 'Error al guardar el presupuesto.' });
    }

    res.status(201).json({ mensaje: 'Presupuesto enviado con éxito.' });
  });
});



// Actualizar tema
// Obtener tema actual
app.get('/api/theme', (req, res) => {
  db.query('SELECT * FROM theme LIMIT 1', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
});

// Actualizar tema
app.put('/api/theme', (req, res) => {
  const { bg_class, text_class } = req.body;

  const sql = `UPDATE theme SET bg_class = ?, text_class = ? WHERE id = 1`;
  db.query(sql, [bg_class, text_class], (err, result) => {
    if (err) {
      console.error('Error al actualizar el theme:', err);
      res.status(500).send('Error en el servidor');
    } else {
      res.send({ message: 'Theme actualizado correctamente' });
    }
  });
});



// =======================

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
