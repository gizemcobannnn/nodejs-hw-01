import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from "../utils/createFakeContact";


export const addOneContact = async () => {
    let contact = createFakeContact();
    let contactString = JSON.stringify(contact)+'\n';
    await fs.appendFile(PATH_DB,contactString,'utf-8');
};

addOneContact();
