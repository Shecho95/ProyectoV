const conexion = require("../database/conexion")
module.exports = {
    async create(product) {
        const {nombre, descripcion, categoria, precio} = product;
        const result = await conexion.query(`insert into products (nombre, descripcion, categoria, precio) 
                                            values ($1, $2, $3, $4)`, [nombre, descripcion, categoria, precio]);
        return result;
    },
    async findAll() {
        const result = await conexion.query("select * from products");
        return result.rows;
    },
    async findOne(sku) {
        const result = await conexion.query(`select * from products where sku = $1`, [sku]);
        return result.rows[0];
    },
    async update(product, sku) {
        const {nombre, descripcion, categoria, precio} = product;
        const result = conexion.query(`update products
        set nombre = $1,
        descripcion = $2,
        categoria = $3,
        precio = $4
        where sku = $5`, [nombre, descripcion, categoria, precio, sku]);
        return result;
    },
    async destroy(sku) {
        const result = conexion.query(`delete from products
        where sku = $1`, [sku]);
        return result;
    },
}