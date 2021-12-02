const conexion = require("../database/conexion")
module.exports = {
    async create(category) {
        const {categoryname} = category;
        const result = await conexion.query(`insert into categories 
           (categoryname) values ($1)`, [categoryname]);
        return result;
    },
    async findAll() {
        const result = await conexion.query("select * from categories");
        return result.rows;
    },
    async findOne(id) {
        const result = await conexion.query(`select * from categories where id = $1`, [id]);
        return result.rows[0];
    },
    async update(category, id) {
        const {categoryname} = category;
        const result = conexion.query(`update categories
            set categoryname = $1
            where id = $2`, [categoryname, id]);
        return result;
    },
    async destroy(id) {
        const result = conexion.query(`delete from categories
        where id = $1`, [id]);
        return result;
    },
}