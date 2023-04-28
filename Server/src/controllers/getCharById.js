const axios = require('axios')

const getCharById = (response, id) => {
    axios(`https://rickandmortyapi.com/api/character${id}`)
    .then(response => console.log(response.results))
    .then(results => {
        const char = {
            id: id,
            name: results.name,
            gender: results.gender,
            species: results.species,
            origin: results.origin.name,
            image: results.image,
            status: results.status
        }
        response.writeHead(200, {"Content-type": "application/json"})
        response.end(JSON.stringify(char))
    })
    .catch(error => {
        response.writeHead(500, {"Content-type": "text/plain"})
        .end(error.message)
    })
}

module.export = getCharById;