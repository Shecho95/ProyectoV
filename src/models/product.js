const conexion = require("../database/conexion")
module.exports = {
    async create(product) {
        const {productname, description, categoryid, price, rating, productimg, isavailable, color, reviews} = product;
        const result = await conexion.query(`insert into products 
        (productname, description, categoryid, price, rating, productimg, isavailable, color, reviews) 
        values ($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [productname, description, categoryid, price, rating, productimg, isavailable, color, reviews]);
        return result;
    },
    async findAll() {
        const result = await conexion.query("select * from products");
        return result.rows;
    },
    async findOne(id) {
        const result = await conexion.query(`select * from products where id = $1`, [id]);
        return result.rows[0];
    },
    async update(product, id) {
        const {productname, description, categoryid, price, rating, productimg, isavailable, color, reviews} = product;
        const result = conexion.query(`update products
        set productname = $1,
        description = $2,
        categoryid = $3,
        price = $4,
        rating = $5,
        productimg = $6,
        isavailable = $7,
        color = $8,
        reviews = $9
        where id = $10`, [productname, description, categoryid, price, rating, productimg, isavailable, color, reviews, id]);
        return result;
    },
    async destroy(id) {
        const result = conexion.query(`delete from products
        where id = $1`, [id]);
        return result;
    },
}