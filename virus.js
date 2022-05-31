function encrypt (race) {
    let newRace = race.replace(/\w/g, 'Ha-ha! ');
    let newName = 'Changed name';
    return [newName, newRace];
}

export {encrypt};