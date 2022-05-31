import config from './config.json' assert {type: "json"};
import axios from 'axios';
import * as fs from 'fs';
import promptSync from 'prompt-sync';

async function getAmmountOfCharacters() {
    const amount = await axios.get(config.allCharactersUrl);
    return amount.data.info.count;
}

async function generateId() {

    const userInput = await cliInput();
    const amountOfAllCharacters = await getAmmountOfCharacters();

    if (userInput > 0 && userInput <= amountOfAllCharacters ) {
        return userInput;
    } else {
        const randomId = Math.floor(1 + Math.random() * (amountOfAllCharacters-1));
        return randomId;
    }    
}

async function cliInput(){
    const characterId = promptSync();
    const newCharacterId = characterId(`Enter character's ID, or leave field empty to generate a random value: `);
    return newCharacterId;
}

function writeToFile(id) {
    const now = new Date();
    fs.appendFile('textFile.txt', `\n${now.getDate()}.${now.getMonth()+1}.${now.getFullYear()} ${now.getHours()}.${now.getMinutes()} Information about alien ${id} successfully hidden`, function (err) {
        if (err) throw err;
    })
}

export {generateId, writeToFile};