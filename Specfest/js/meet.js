let button = document.querySelector('#button')
let name = document.querySelector('#name')
let population = document.querySelector('#population')
let climate = document.querySelector('#climate')
let terrain = document.querySelector('#terrain')
let gravity = document.querySelector('#gravity')


function getData() {
    generateDataLoading()
    let randomPlanet = Math.floor((Math.random() * 61) + 1)
    let swApi = "https://swapi.co/api/planets/" + randomPlanet

    axios.get(swApi).then(response => {
        generateData(response.data)
    }).catch(e => {
        generateDataFail()
    })
}

function generateData(data) {
    name.innerText = data.name
    population.innerText = data.population
    climate.innerText = data.climate
    terrain.innerText = data.terrain
    gravity.innerText = data.gravity
}

function generateDataFail() {
    name.innerText = 'R.I.P Api'
    population.innerText = ''
    climate.innerText = ''
    terrain.innerText = ''
    gravity.innerText = ''
}

function generateDataLoading() {
    name.innerHTML = '<i class="fas fa-circle-notch fa-spin fa-sw"></i>'
    population.innerText = ''
    climate.innerText = ''
    terrain.innerText = ''
    gravity.innerText = ''
}

button.addEventListener('click', getData)