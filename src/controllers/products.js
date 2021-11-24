const Product = require('../models/product');

const productsGet = (req, res) => {
    Product.findAll()
    .then((products) => res.send(products))
    .catch((err) => {
      console.log('Error al consultar los productos', JSON.stringify(err))
      res.send(err)
    });
    //res.json({ msg: "get Products controller" });
}

const productsPost = (req, res) => {
    Product.create(req.body)
      .then(result => res.json(result))
      .catch(err => {
        //console.log('Error creando el producto', JSON.stringify(result))
        return res.status(400).send(err)
      });
       
    //res.json({ msg: "Post Products controller", Product});
}

const productsGetBySKU = (req, res) => {
    Product.findOne(req.params.sku)
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    //res.json({ msg: "get by SKU Products controller" });
}

const productsPut = (req, res) => {
    Product.update(req.body, req.params.sku)
        .then(() => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    //res.json({ msg: "put Products controller" });
}

const productsDelete = (req, res) => {
    //const sku = parseInt(req.params.sku)
    Product.destroy(req.params.sku)
        .then(() => res.sendStatus(204))
        .catch((err) => {
            console.log('Error borrando el producto', JSON.stringify(err))
            res.status(400).send(err)
    })
    //res.json({ msg: "delete Products controller" });
}

module.exports = {
    productsGet, productsPost, productsGetBySKU, productsPut, productsDelete
}
