//index.js
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/routes_auth');
const anotacionRoutes = require('./src/routes/routes_anotacion');
const calificacionRoutes = require('./src/routes/routes_calificacion');
const comentarioRoutes = require('./src/routes/routes_comentario');
const estadoSolicitudRoutes = require('./src/routes/routes_estado_solicitud');
const facultadRoutes = require('./src/routes/routes_facultad');
const fuenteRoutes = require('./src/routes/routes_fuente');
const miembrosProyectoRoutes = require('./src/routes/routes_miembros_proyecto');
const otroRoutes = require('./src/routes/routes_otro');
const proyectoTemaRoutes = require('./src/routes/routes_proyecto_tema');
const proyectoRoutes = require('./src/routes/routes_proyecto');
const recursoProyectoRoutes = require('./src/routes/routes_recurso_proyecto');
const rolRoutes = require('./src/routes/routes_rol');
const solicitudRoutes = require('./src/routes/routes_solicitud');
const temaRoutes = require('./src/routes/routes_tema');
const universidadRoutes = require('./src/routes/routes_universidad');
const usuarioFacultadUniversidadRoutes = require('./src/routes/routes_usuario_facultad_universidad');
const usuarioRolRoutes = require('./src/routes/routes_usuario_rol');
const usuarioRoutes = require('./src/routes/routes_usuario');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Servidor Funcionando!');
});

app.use('/api/auth', authRoutes);
app.use('/api/anotacion', anotacionRoutes);
app.use('/api/calificaciones', calificacionRoutes);
app.use('/api/comentarios', comentarioRoutes);
app.use('/api/estado_solicitudes', estadoSolicitudRoutes);
app.use('/api/facultades', facultadRoutes);
app.use('/api/fuente', fuenteRoutes);
app.use('/api/miembros_proyecto', miembrosProyectoRoutes);
app.use('/api/otro', otroRoutes);
app.use('/api/proyecto_tema', proyectoTemaRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/recursos_proyecto', recursoProyectoRoutes);
app.use('/api/roles', rolRoutes);
app.use('/api/solicitudes', solicitudRoutes);
app.use('/api/tema', temaRoutes);
app.use('/api/universidades', universidadRoutes);
app.use('/api/usuario_rol', usuarioRolRoutes);
app.use('/api/usuario_facultad_universidad', usuarioFacultadUniversidadRoutes);
app.use('/api/usuarios', usuarioRoutes);


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
