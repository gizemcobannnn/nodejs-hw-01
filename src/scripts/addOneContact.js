import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';
import { createFakeContact } from "../utils/createFakeContact.js";
import { getAllContacts } from './getAllContacts.js';


export const addOneContact = async () => {
    let contacts = await getAllContacts();
    let contact = createFakeContact();
    contacts.push(contact);
    let contactString = JSON.stringify(contacts, null ,2)+'\n';
    await fs.promises.writeFile(PATH_DB,contactString,'utf-8');
};

addOneContact();
