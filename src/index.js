// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './APICalls.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import Trip from './trip.js'

const annualCost = document.querySelector('.annual-cost')
const destinationName = document.querySelector('.destination-name')
const picOfDestination = document.querySelector('.pic-of-destination')
const tripDate = document.querySelector('.date')
const tripStatus = document.querySelector('.status')


console.log('This is the JavaScript entry file - your code begins here.');
// window.addEventListener('load', setData)
// const fetchedTravelers = apiCalls.loadData('http://localhost:3001/api/v1/travelers')

const fetchedTravelers = apiCalls.getTravelers()
const fetchedTrips = apiCalls.getTrips()
const fetchedDestinations = apiCalls.getDestinations()
let allTripsData, currentUser, allDestinations

Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
    .then(values => {
        showStuff(values[0])
        makeTrips(values[1])
        showStuff(values[2])
    }).catch('o no!')



function showStuff(stuff) {

    //console.log(stuff)
}

function makeTrips(fetchedData) {
    allTripsData = fetchedData
    console.log(allTripsData)
}
console.log(allTripsData)
    // function setData() {
    //     travelers = apiCalls.loadData('http://localhost:3001/api/v1/travelers')
    // }