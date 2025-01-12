import fs from 'fs';   
import { PATH_DB } from '../constants/contacts.js';
export const removeAllContacts = async () => {
    await fs.promises.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');};

removeAllContacts();
