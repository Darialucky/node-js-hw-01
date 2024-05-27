import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    for (let i = 0; i < number; i++) {
      contacts.push({
        id: contacts.length + 1,
        name: `Contact ${contacts.length + 1}`,
        email: `contact${contacts.length + 1}@example.com`,
        phone: '000-000-0000',
      });
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

await generateContacts(5);
