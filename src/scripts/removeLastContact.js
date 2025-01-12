import fs from 'fs/promises';   
import { PATH_DB } from '../constants/contacts.js';
import { getAllContacts } from './getAllContacts.js';
export const removeLastContact = async () => {
    let contacts = await getAllContacts();

    if (contacts.length > 0) {
        contacts.pop();
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

};

removeLastContact();
