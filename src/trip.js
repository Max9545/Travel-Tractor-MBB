class Trip {
    constructor(tripInfo) {
        this.id = tripInfo.id
        this.userID = tripInfo.userID
        this.destinationID = tripInfo.destinationID
        this.travelers = tripInfo.travelers
        this.date = tripInfo.date
        this.duration = tripInfo.duration
        this.status = tripInfo.status
        this.suggestedActivities = tripInfo.suggestedActivities
    }
    calculateTripCost(destinationData) {

        const destinationObj = destinationData.find(destination => destination.id === this.destinationID)

        const flightCost = (destinationObj.estimatedFlightCostPerPerson * 2) * this.travelers

        const hotelCost = this.duration * destinationObj.estimatedLodgingCostPerDay


        return Math.round((hotelCost + flightCost) * 1.1)
    }
}
module.exports = Trip