const User = require('../models/user');

const usersGet = (req, res) => {
    User.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.log('Error al consultar los usuarios', JSON.stringify(err))
      res.send(err)
    });
    //res.json({ msg: "get users controller" });
}

const usersPost = (req, res) => {
    User.create(req.body)
      .then(result => res.json(result))
      .catch(err => {
        //console.log('Error creando el usero', JSON.stringify(result))
        return res.status(400).send(err)
      });
       
    //res.json({ msg: "Post users controller", user});
}

const usersGetById = (req, res) => {
    User.findOne(req.params.id)
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
    //res.json({ msg: "get by SKU users controller" });
}

const usersPut = (req, res) => {
    User.update(req.body, req.params.id)
        .then(() => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    //res.json({ msg: "put users controller" });
}

const usersDelete = (req, res) => {
    //const sku = parseInt(req.params.sku)
    User.destroy(req.params.id)
        .then(() => res.sendStatus(204))
        .catch((err) => {
            console.log('Error borrando el usuario', JSON.stringify(err))
            res.status(400).send(err)
    })
    //res.json({ msg: "delete users controller" });
}

module.exports = {
    usersGet, usersPost, usersGetById, usersPut, usersDelete
}