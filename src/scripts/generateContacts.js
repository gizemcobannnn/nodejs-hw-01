import {createFakeContact} from '../utils/createFakeContact';
import fs from 'fs/promises';   
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
    let contacts = [];

    for(let i=0;i<number;i++){
        let contact = createFakeContact();
        contacts.push(contact);
    }
    
    await fs.writeFile(PATH_DB,JSON.stringify(contacts, null, 2), 'utf-8');
};

generateContacts(5);
