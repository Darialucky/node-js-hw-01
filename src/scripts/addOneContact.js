import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parsedContacts = JSON.parse(contacts);
    parsedContacts.push(createFakeContact());
    await fs.writeFile(PATH_DB, JSON.stringify(parsedContacts, null, 2));
    console.log('Контакт успішно додано!');
  } catch (error) {
    console.error(error);
  }
};

await addOneContact();
