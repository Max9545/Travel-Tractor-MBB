import './css/base.scss';
import apiCalls from './APICalls.js';
import './images/turing-logo.png';
import Trip from './trip.js'
import User from './user.js'
import domUpdates from './DOMUpdates.js'

const signInButton = document.querySelector('.sign-in-button')
const destinationDropDown = document.querySelector('#destination-select-drop-down')
const bookButton = document.querySelector('.book-trip')
const cardGrid = document.querySelector('.card-grid')


signInButton.addEventListener('click', attemptSignIn)
bookButton.addEventListener('click', bookTrip)

let allTripsData, currentUser, allDestinations

function attemptSignIn() {
    const passwordAttempt = document.querySelector('#password-input').value
    const userNameAttempt = document.querySelector('#username-input').value
    const nameCutOff = 8
    const userIDCutOff = userNameAttempt.slice(8)
    const userName = userNameAttempt.slice(0, nameCutOff)
    const userID = parseInt(userIDCutOff)
    if (userName === 'traveler' && passwordAttempt === 'travel2020') {
        getIntialData(userID)
    } else {
        signInButton.insertAdjacentHTML('afterbegin', `<p>Wrong Password Gets You Less Space!!</p>`)
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
        }).catch(domUpdates.displayErrorMessage())
}

function makeUser(userObj) {
    currentUser = new User(userObj, allTripsData)
    displayAnnualCost()
    currentUser.getDestinations(allDestinations)

    domUpdates.displayTripCards(currentUser)
}

function displayAnnualCost() {
    document.querySelector('.annual-cost').innerHTML = `You have spent ${numberWithCommas(currentUser.calculateSumCostOfYear(allTripsData, allDestinations))}$this year ${currentUser.name}`
}

function makeDestinations(desinationObj) {
    allDestinations = desinationObj.destinations

    domUpdates.makeDestinationDropDown(allDestinations)
}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.trips

}

function bookTrip() {
    const dateInput = document.querySelector('#date-input')
    const durationInput = document.querySelector('#duration-input')
    const travelersInput = document.querySelector('#travelers-input')

    if (!destinationDropDown.value || !travelersInput.value || !dateInput.value || !durationInput.value) {
        domUpdates.emptyFieldsError()
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

        displayTripCost()
            // document.querySelector('.trip-cost').innerHTML = `This trip costs ${tripCost}$`

        apiCalls.postData(newUserTripObj)
            .then(domUpdates.clearCardGrid)
            .then(getIntialData(currentUser.id))
    }
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


function hideHTMLElement(element) {

    const elementToHide = document.getElementById(element);

    elementToHide.classList.add('hidden')

}