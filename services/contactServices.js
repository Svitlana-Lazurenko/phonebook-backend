const Contact = require("../db/models/contactModel");

const getContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

module.exports = {
  getContacts,
};
