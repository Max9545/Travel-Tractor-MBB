// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './APICalls.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

import Trip from './trip.js'



console.log('This is the JavaScript entry file - your code begins here.');
// window.addEventListener('load', setData)
// const fetchedTravelers = apiCalls.loadData('http://localhost:3001/api/v1/travelers')

const fetchedTravelers = apiCalls.getTravelers()
const fetchedTrips = apiCalls.getTrips()
const fetchedDestinations = apiCalls.getDestinations()
let allTripsData

Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
    .then(values => {
        showStuff(values[0])
        allTripsData = values[1];
        showStuff(values[2])
    }).catch('o no!')



function showStuff(stuff) {
    // console.log(stuff)
}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.map(trip => new Trip(trip))
    console.log(fetchedData)
}
console.log(allTripsData)
    // function setData() {
    //     travelers = apiCalls.loadData('http://localhost:3001/api/v1/travelers')
    // }