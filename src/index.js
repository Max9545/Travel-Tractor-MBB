// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './APICalls.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import Trip from './trip.js'
import User from './user.js'

const annualCost = document.querySelector('.annual-cost')
const destinationName = document.querySelector('.destination-name')
const picOfDestination = document.querySelector('.pic-of-destination')
const tripDate = document.querySelector('.date')
const tripStatus = document.querySelector('.status')
const cardGrid = document.querySelector('.card-grid')

console.log('This is the JavaScript entry file - your code begins here.');
// window.addEventListener('load', setData)
// const fetchedTravelers = apiCalls.loadData('http://localhost:3001/api/v1/travelers')

const fetchedTravelers = apiCalls.getTravelers()
const fetchedTrips = apiCalls.getTrips()
const fetchedDestinations = apiCalls.getDestinations()
let allTripsData, currentUser, allDestinations

Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
    .then(values => {
        makeDestinations(values[2])
        makeTrips(values[1])
        makeUser(values[0])
    }).catch('o no!')

// window.addEventListener('load', showStuff)

// function showStuff() {
//     annualCost.innerHTML = currentUser.calculateSumCostOfYear(allTripsData, allDestinations)
//         //console.log(stuff)
// }

function makeUser(userObj) {
    currentUser = new User(userObj.travelers[getRandomInt(userObj.travelers.length)], allTripsData)

    // console.log(allTripsData);
    // console.log(allDestinations);
    // console.log(currentUser.userDestinations);
    displayAnnualCost()
    currentUser.getDestinations(allDestinations)
    displayTripCards(currentUser)

    console.log(currentUser.userDestinations);
    // annualCost.innerHTML = `You have spent ${currentUser.calculateSumCostOfYear(allTripsData, allDestinations)} ${currentUser.name}`
    // showStuff()
    // console.log(currentUser)
    //  annualCost.innerText = userArray[0]
}

function displayAnnualCost() {
    annualCost.innerHTML = `You have spent ${currentUser.calculateSumCostOfYear(allTripsData, allDestinations)}$ this year ${currentUser.name}`
}

function makeDestinations(desinationObj) {
    allDestinations = desinationObj.destinations

}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.trips
        // console.log(allTripsData)
}

function displayTripCards(userObj) {
    userObj.userTrips.forEach(trip => {
        const destinationObj = userObj.userDestinations.find(destination => destination.id === trip.destinationID)
        cardGrid.innerHTML += `<article>
        <p class='destination-name'>${destinationObj.destination}</p>
        <img id='pic-destination' src=${destinationObj.image} alt=${destinationObj.alt}>
        <div class='trip-info'>
            <p class='date'>${trip.date}</p>
            <p class='status'>${trip.status}</p>
        </div>
    </article>`
    })
}

// console.log(allTripsData)
// function setData() {
//     travelers = apiCalls.loadData('http://localhost:3001/api/v1/travelers')
// }
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}