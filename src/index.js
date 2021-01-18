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

// const fetchedTravelers = apiCalls.getTravelers()
// const fetchedTrips = apiCalls.getTrips()
// const fetchedDestinations = apiCalls.getDestinations()
const fetchedTravelers = apiCalls.loadData('travelers')
const fetchedTrips = apiCalls.loadData('trips')
const fetchedDestinations = apiCalls.loadData('destinations')
let allTripsData, currentUser, allDestinations

Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
    .then(values => {
        makeDestinations(values[2])
        makeTrips(values[1])
        makeUser(values[0])
    }).catch('o no!')


function makeUser(userObj) {
    currentUser = new User(userObj.travelers[getRandomInt(userObj.travelers.length)], allTripsData)
    displayAnnualCost()
    currentUser.getDestinations(allDestinations)
        //Steve help here- get this to work on instantiation
    displayTripCards(currentUser)
}

function displayAnnualCost() {
    annualCost.innerHTML = `You have spent ${currentUser.calculateSumCostOfYear(allTripsData, allDestinations)}$ this year ${currentUser.name}`
}

function makeDestinations(desinationObj) {
    allDestinations = desinationObj.destinations

}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.trips
        // use Trip class?
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


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}