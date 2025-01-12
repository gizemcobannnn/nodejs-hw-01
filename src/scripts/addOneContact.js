import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';
import { createFakeContact } from "../utils/createFakeContact";


export const addOneContact = async () => {
    let contact = createFakeContact();
    let contactString = JSON.stringify(contact)+'\n';
    await fs.promises.appendFile(PATH_DB,contactString,'utf-8');
};

addOneContact();
