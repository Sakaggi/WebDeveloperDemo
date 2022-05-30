import { franc } from 'franc';
import langs from 'langs';


const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log('sorry! no can do');
} else {
    try {
        console.log(langs.where("3", langCode).name);
    } catch (e) {
        console.log('sorry! no can do. Do not have it in me');
    }
} 