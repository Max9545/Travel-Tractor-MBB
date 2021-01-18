class User {
    constructor(userData) {
        this.name = userData.name
        this.type = userData.type
        this.id = userData.id
    }
    calculateSumCostOfYear(tripLog, destinationLog) {
        let rawCost = tripLog.reduce((acc, trip) => {
            if (trip.userID === this.id && this.checkDate(trip.date)) {
                let destinationObj = destinationLog.find(destination => destination.id === trip.destinationID)
                acc += (trip.duration * destinationObj.estimatedLodgingCostPerDay)
                return acc
            }
            return acc
        }, 0)
        return rawCost * 1.1
    }
    checkDate(tripDate) {
        const todayUTC = new Date().getFullYear()
        const tripUTC = new Date(tripDate).getFullYear()
        console.log(todayUTC);
        console.log(tripUTC)
            // if (todayUTC === (tripUTC - 1))
        console.log(todayUTC - 1);
        return (tripUTC === (todayUTC - 1))
    }
}
module.exports = User