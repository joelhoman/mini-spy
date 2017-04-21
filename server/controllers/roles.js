const { Role } = require('../models');

exports.create = (req, res) => {
  Role.create(req.body).then(role => res.status(201).send(role));
};
