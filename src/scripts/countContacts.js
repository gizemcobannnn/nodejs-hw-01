import fs from 'fs';   
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
    const contacts = await fs.promises.readFile(PATH_DB,'utf-8');
    const contactsObject = JSON.parse(contacts);

    return contactsObject.length;
};

console.log( await countContacts());
