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
const cardGrid = document.querySelector('.card-grid')
const dateInput = document.querySelector('.date-input')
const durationInput = document.querySelector('.duration-input')
const travelersInput = document.querySelector('.travelers-input')

const destinationInput = document.querySelector('#destination-select')


console.log('This is the JavaScript entry file - your code begins here.');


const fetchedTravelers = apiCalls.loadData('travelers')
const fetchedTrips = apiCalls.loadData('trips')
const fetchedDestinations = apiCalls.loadData('destinations')
let allTripsData, currentUser, allDestinations

Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
    .then(values => {
        makeDestinations(values[2])
        makeTrips(values[1])
        makeUser(values[0])
    }).catch('Error in Promise.all')


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
    makeDestinationDropDown(allDestinations)
}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.trips
        // use Trip class?
}

function displayTripCards(userObj) {
    userObj.userTrips.forEach(trip => {

        const destinationObj = userObj.userDestinations.find(destination => destination.id === trip.destinationID)

        cardGrid.innerHTML += `<article class='card'>
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

function postTrip() {
    const newUserTripObj = new Trip({ date: dateInput, duration: durationInput, travelers: travelersInput, destination: destinationInput })
    apiCalls.postData(newUserTripObj)
}

function makeDestinationDropDown(destinationsData) {
    destinationsData.forEach(destination => destinationInput.insertAdjacentHTML('afterbegin', `<option value="${destination.destination}">${destination.destination}</option>`))
}