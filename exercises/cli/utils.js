const fs = require('fs')
const path = require('path')

// this path needs to be relative to work with fs
const contactsLocation = 'contacts.json';
const location = path.join(__dirname, contactsLocation);

/**
 * should read the contacts at the
 * @contactsLocation path and convert
 * it to a js object
 */
const getContacts = () => {
  const fileContents = fs.readFileSync(location);
  return JSON.parse(fileContents);
}

/**
 * takes a contacts object, converts it to JSON
 * and saves it at the @contactsLocation path
 * @param {Object} contacts contacts object
 */
const saveContacts = (contacts) => {
  const json = JSON.stringify(contacts, null, 2);
  fs.writeFileSync(location, json);
}

module.exports = {
  contactsLocation,
  getContacts,
  saveContacts
}

