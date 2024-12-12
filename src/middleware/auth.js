const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Obtén el token del encabezado de autorización con el esquema "Bearer"
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // authHeader puede ser null

    if (!token) {
        return res.status(401).json({ message: 'No token, autorización denegada' });
    }

    try {
        // Utiliza la clave secreta desde el archivo .env
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            console.error('JWT_SECRET no está definido en las variables de entorno.');
            return res.status(500).json({ message: 'Error interno del servidor.' });
        }

        // Verifica el token y decodifica su contenido
        const decoded = jwt.verify(token, secret);
        
        // Agrega los datos decodificados del usuario a la solicitud
        req.user = {
            id: decoded.userId,
            nombre: decoded.nombre,
            email: decoded.email,
        };

        next(); // Continua al siguiente middleware/controlador
    } catch (error) {
        // Maneja errores específicos del token
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'El token ha expirado, inicia sesión nuevamente.' });
        }

        return res.status(401).json({ message: 'Token no válido' });
    }
};
