const Category = require('../models/category');

const categoryGet = (req, res) => {
    Category.findAll()
    .then((categories) => res.send(categories))
    .catch((err) => {
      console.log('Error al consultar las categorias', JSON.stringify(err))
      res.send(err)
    });
    //res.json({ msg: "get users controller" });
}

module.exports = {
    categoryGet
}