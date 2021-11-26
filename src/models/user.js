const conexion = require("../database/conexion")
module.exports = {
    async create(user) {
        const {nombre, cedula, contrasena, correo, telefono, direccion, cidudad, ultima_conexion} = user;
        const result = await conexion.query(`insert into users 
            (nombre, cedula, contrasena, correo, telefono, direccion, cidudad, ultima_conexion) 
            values ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [nombre, cedula, contrasena, correo, telefono, direccion, cidudad, ultima_conexion]);
        return result;
    },
    async findAll() {
        const result = await conexion.query("select * from users");
        return result.rows;
    },
    async findOne(id) {
        const result = await conexion.query(`select * from users where id = $1`, [id]);
        return result.rows[0];
    },
    async update(product, id) {
        const {nombre, cedula, contrasena, correo, telefono, direccion, cidudad, ultima_conexion} = product;
        const result = conexion.query(`update users
            set nombre = $1, cedula = $2, contrasena = $3, correo = $4, telefono = $5, direccion = $6, cidudad = $7, ultima_conexion = $8
            where id = $9`, [nombre, cedula, contrasena, correo, telefono, direccion, cidudad, ultima_conexion, id]);
        return result;
    },
    async destroy(id) {
        const result = conexion.query(`delete from users
        where id = $1`, [id]);
        return result;
    },
}