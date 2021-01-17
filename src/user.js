class User {
    constructor(userData) {
        this.name = userData.name
        this.type = userData.type
        this.id = userData.id
    }
    calculateSumCostOfYear(tripLog, destinationLog) {
        let rawCost = tripLog.reduce((acc, trip) => {
            if (trip.userID === this.id) {
                let destinationObj = destinationLog.find(destination => destination.id === trip.destinationID)
                acc += (trip.duration * destinationObj.estimatedLodgingCostPerDay)
                return acc
            }
            return acc
        }, 0)
        return rawCost * 1.1
    }
}
module.exports = User