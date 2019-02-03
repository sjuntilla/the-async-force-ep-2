console.log('IS THIS THING ON???');

const button = document.querySelector('#requestResourceButton');
const body = document.querySelector('#contentContainer');



//gets info for people
getPerson = (name, gender, species, elem) => {
    let nameTitle = document.createElement('h2');
    nameTitle.className = 'name';
    nameTitle.innerHTML = elem.name;

    let genderTitle = document.createElement('p');
    genderTitle.className = 'gender';
    genderTitle.innerHTML = elem.gender;

    let speciesTitle = document.createElement('p');
    speciesTitle.className = 'species';
    speciesTitle.innerHTML = elem.species;

}

//gets info for planets
getPlanet = (name, terrain, population, elem) => {
    let pNameTitle = document.createElement('h2');
    pNameTitle.innerHTML = elem.name;

    let pTerrain = document.createElement('p');
    pTerrain.innerHTML = elem.terrain;

    let population = document.createElement('p');
    population.innerHTML = elem.population;

}

//gets info for starships
getShips = (name, manu, shipclass, elem) => {
    let shipName = document.createElement('h2');
    shipName.innerHTML = elem.name;

    let manuTitle = document.createElement('p');
    manuTitle.innerHTML = elem.manufacturer;

    let sClass = document.createElement('p');
    sClass.innerHTML = elem.starship_shipclass;

}

//XHR request skeleton
function req(url, name) {
    let req = new XMLHttpRequest();
    req.addEventListener('load', function () {
        let oReq = JSON.parse(name.responseText);
    })
    req.open('GET', url);
    req.send();
}