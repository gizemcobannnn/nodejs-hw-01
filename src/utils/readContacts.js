import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB,'utf-8');
        console.log("File content",data);
    }catch(error){
        console.error("File reading error",error);
    }
};


/*
src/utils/readContacts.js dosyasında readContacts adında bir yardımcı fonksiyon tanımlayın. 
Bu fonksiyon, src/db/db.json dosyasının içeriğini okumalı ve geri döndürmelidir.
 Fonksiyon, verileri doğru bir şekilde işleyerek dosyadan verilerin doğru bir şekilde okunmasını sağlamalıdır.

*/