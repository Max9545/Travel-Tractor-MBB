const domUpdates = {
    clearCardGrid() {
        cardGrid.innerHTML = ''
    },
    displayTripCards(userObj) {
        this.clearCardGrid()
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
    },
    makeDestinationDropDown(destinationsData) {
        destinationsData.forEach(destination => destinationDropDown.insertAdjacentHTML('afterbegin', `<option id = '${destination.destinationID} class='destination-select value = "${destination.destination}">${destination.destination}</option>`))
    },
    displayErrorMessage() {
        console.log('Error Will Robinson');
        cardGrid.innerHTML = '<p>These are not the Cards you are Looking For'
    },
    emptyFieldsError() {
        document.querySelector('.empty-fields-error-message').innerText = `You need to enter all Fields!`
    },
    displayTripCost(tripCost) {
        const tripCost = document.querySelector('.trip-cost')
        tripCost.innerHTML = `This trip costs ${tripCost}$`
    }
}
export default domUpdates;