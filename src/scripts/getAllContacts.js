import { PATH_DB } from "../constants/contacts.js";
import fs from 'fs';

export const getAllContacts = async () => {
    const contacts = await fs.promises.readFile(PATH_DB,'utf-8');
    return JSON.parse(contacts);
};

console.log( await getAllContacts());
