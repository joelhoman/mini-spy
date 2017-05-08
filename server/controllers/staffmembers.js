const { StaffMember } = require('../models');

exports.create = (req, res) => {
  StaffMember.create(req.body).then(staffmember => res.status(201).send(staffmember));
};
