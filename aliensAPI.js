import axios from 'axios';
import config from './config.json' assert {type: "json"};
import {generateId} from './testData.js';

async function getInfo (){
    const res = await axios.get(`${config.singleCharacterUrl}${await generateId()}`);
    //console.log(`Name: ${res.data.name}, Status: ${res.data.status}, Species: ${res.data.species}, id: ${res.data.id}`);
    return [res.data.name, res.data.status, res.data.species, res.data.id];
}

export {getInfo};