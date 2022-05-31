import {printInfo} from './printer.util.js';
import {writeToFile} from './testData.js';
import {getInfo} from './aliensAPI.js';
import {encrypt} from './virus.js';

async function myApplication () {    
    let [name, status, species, id] = await getInfo();

    if(species != 'Human') {
        let [changedName, changedSpecies] = encrypt(species);
        writeToFile(id);
        printInfo (changedName, status, changedSpecies);
        return [changedName, status, changedSpecies];
    } else {
        printInfo(name, status, species);
        return [name, status, species];
    }
}

myApplication();