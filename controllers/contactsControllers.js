const services = require("../services/contactServices");

const getContactsController = async (req, res) => {
  const result = await services.getContacts();

  res.json(result);
};

module.exports = {
  getContactsController,
};
