// install fetch module
const fetch = require('node-fetch');

fetch("https://restcountries.eu/rest/v2/all?fields=name;population")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // create array of population numbers 
        let numbers = data.map(e => e.population);
        // find the highest population number
        let maxNumber = Math.max(...numbers);
        // find the country with the highest population
        let maxCountry = data.find(n => n.population == maxNumber);
        console.log(`The highest population country ${maxCountry.name}: ${maxCountry.population}`);
    })
    .catch(error => {
        console.log("error");
    })