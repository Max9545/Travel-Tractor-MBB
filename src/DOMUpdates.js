const domUpdates = {
    cardGrid() {
        cardGrid.innerHTML = ''
    },
    displayTripCards(userObj) {
        this.cardGrid()
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
}
export default domUpdates;