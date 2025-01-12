import { PATH_DB } from "../constants/contacts";
import fs from 'fs/promises';

export const getAllContacts = async () => {
    const contacts = await fs.readFile(PATH_DB,'utf-8');
    return JSON.parse(contacts);
};

console.log( getAllContacts());
