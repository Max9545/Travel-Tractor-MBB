// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import apiCalls from './APICalls.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import Trip from './trip.js'
import User from './user.js'
const errorSpace = document.querySelector('.empty-fields-error-message')
    // const overLay = document.querySelector('#overlay')
    // const userSignInBox = document.querySelector('#user-sign-in-box')
const signInButton = document.querySelector('.sign-in-button')
const annualCost = document.querySelector('.annual-cost')
const cardGrid = document.querySelector('.card-grid')
const dateInput = document.querySelector('#date-input')
const durationInput = document.querySelector('#duration-input')
const travelersInput = document.querySelector('#travelers-input')
const destinationInput = document.querySelector('.destination-select')
const destinationDropDown = document.querySelector('#destination-select-drop-down')
const bookButton = document.querySelector('.book-trip')
const tripCostDisplay = document.querySelector('.trip-cost')

signInButton.addEventListener('click', attemptSignIn)
bookButton.addEventListener('click', bookTrip)

console.log('This is the JavaScript entry file - your code begins here.');

// window.addEventListener('load', getIntialData)

let allTripsData, currentUser, allDestinations



function attemptSignIn() {
    const passwordAttempt = document.querySelector('#password-input').value
    const userNameAttempt = document.querySelector('#username-input').value
    const nameCutOff = 8
    const userName = userNameAttempt.slice(0, nameCutOff)
    const userID = parseInt(userNameAttempt.slice(8))
    if (userName === 'traveler' && passwordAttempt === 'travel2020') {
        getIntialData(userID)
            // userSignInBox.classList.add('hidden')
    } else {
        console.log('boopy!')
    }

}

function getIntialData(userID) {
    const fetchedTravelers = apiCalls.loadData(`travelers/${userID}`)
    const fetchedTrips = apiCalls.loadData('trips')
    const fetchedDestinations = apiCalls.loadData('destinations')
    Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
        .then(values => {
            hideHTMLElement('user-sign-in-box')
            hideHTMLElement('overlay')
            makeDestinations(values[2])
            makeTrips(values[1])
            makeUser(values[0])
        }).catch(displayErrorMessage)
}

function makeUser(userObj) {
    currentUser = new User(userObj, allTripsData)
    displayAnnualCost()
    currentUser.getDestinations(allDestinations)

    displayTripCards(currentUser)
}

function displayAnnualCost() {
    annualCost.innerHTML = `You have spent ${numberWithCommas(currentUser.calculateSumCostOfYear(allTripsData, allDestinations))}$this year ${currentUser.name}`
}

function makeDestinations(desinationObj) {
    allDestinations = desinationObj.destinations

    makeDestinationDropDown(allDestinations)
}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.trips

}

function displayTripCards(userObj) {

    cardGrid.innerHTML = ''
    userObj.userTrips.forEach(trip => {

        const destinationObj = userObj.userDestinations.find(destination =>
            destination.id === trip.destinationID
        )

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

function checkExistance(arrayToCheck) {
    return Array.every()
}

function bookTrip() {
    if (!destinationDropDown.value || !travelersInput.value || !dateInput.value || !durationInput.value) {
        errorSpace.innerText = `You need to enter all Fields!`
    } else {

        const newUserTripObj = new Trip({
            id: makeTripID(),
            userID: currentUser.id,
            destinationID: getDestinationID(destinationDropDown.value),
            travelers: travelersInput.value,
            date: formatDate(dateInput.value),
            duration: durationInput.value,
            status: 'pending',
            suggestedActivities: []
        })
        const tripCost = newUserTripObj.calculateTripCost(allDestinations)
            // console.log(tripCost)

        tripCostDisplay.innerHTML = `This trip costs ${tripCost}$`

        apiCalls.postData(newUserTripObj)
            .then(cardGrid.innerHTML = '')
            .then(getIntialData(currentUser.id))
    }



    // makeTrips(apiCalls.loadData('trips'))
}

function makeDestinationDropDown(destinationsData) {
    console.log(destinationsData)
    destinationsData.forEach(destination => destinationDropDown.insertAdjacentHTML('afterbegin', `<option id = '${destination.destinationID} class='destination-select value = "${destination.destination}">${destination.destination}</option>`))
}

function getDestinationID(nameOfPlace) {
    const trip = allDestinations.find(destination => destination.destination === nameOfPlace)
    return trip.id
}

function makeTripID() {
    return allTripsData.sort((tripA, tripB) => tripB.id - tripA.id)[0].id + 1
}

function formatDate(date) {
    const dateInfo = date.split('-');
    return dateInfo.join('/');
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayErrorMessage() {
    console.log('life = pain');
}

function hideHTMLElement(element) {

    const elementToHide = document.getElementById(element);

    elementToHide.classList.add('hidden')


}