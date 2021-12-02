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

const productsGetById = (req, res) => {
    Product.findOne(req.params.id)
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
    //res.json({ msg: "get by id Products controller" });
}


const productsGetByCategory = (req, res) => {
  Product.findOneByCategory(req.params.category_id)
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
  //res.json({ msg: "get by categoriy Products controller" });
}

const productsPut = (req, res) => {
    Product.update(req.body, req.params.id)
        .then(() => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    //res.json({ msg: "put Products controller" });
}

const productsDelete = (req, res) => {
    //const sku = parseInt(req.params.sku)
    Product.destroy(req.params.id)
        .then(() => res.sendStatus(204))
        .catch((err) => {
            console.log('Error borrando el producto', JSON.stringify(err))
            res.status(400).send(err)
    })
    //res.json({ msg: "delete Products controller" });
}

module.exports = {
    productsGet, productsPost, productsGetById, productsPut, productsDelete, productsGetByCategory
}
