import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const writeContacts = async (updatedContacts) => {
    try{
        const data = await fs.promises.writeFile(PATH_DB,updatedContacts,'utf-8');
        console.log("my data:",data);
    }catch(error){
        console.log(error);
    }
};


/*
src/utils/writeContacts.js dosyasında writeContacts adında bir yardımcı fonksiyon tanımlayın. 
Bu fonksiyon, src/db/db.json dosyasına veri yazmalıdır.
 Fonksiyon, verileri parametre olarak doğru bir şekilde almalı ve dosyaya verilerin doğru bir şekilde yazılmasını sağlamalıdır.

*/