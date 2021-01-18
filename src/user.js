class User {
    constructor(userData, tripsData, destinatonData) {
        this.name = userData.name
        this.type = userData.travelerType
        this.id = userData.id
        this.userTrips = tripsData.filter(trip => trip.userID === this.id)
        this.userDestinations
    }
    calculateSumCostOfYear(tripLog, destinationLog) {
        let rawCost = tripLog.reduce((acc, trip) => {
            if (trip.userID === this.id && this.checkDate(trip.date)) {
                let destinationObj = destinationLog.find(destination => destination.id === trip.destinationID)
                acc += (trip.duration * destinationObj.estimatedLodgingCostPerDay) + this.calculateFlightCost(destinationObj, trip)
                return acc
            }
            return acc
        }, 0)
        return parseInt((rawCost * 1.1).toFixed())
    }
    checkDate(tripDate) {
        const todayUTC = new Date().getFullYear()
        const tripUTC = new Date(tripDate).getFullYear()
        console.log(todayUTC);
        console.log(tripUTC)
        console.log(todayUTC - 1);
        return (tripUTC === (todayUTC - 1))
    }
    calculateFlightCost(destination, trip) {
        return (destination.estimatedFlightCostPerPerson * 2) * trip.travelers
    }
    getDestinations(destinationData) {
        this.userDestinations = destinationData.reduce((acc, destination) => {
            this.userTrips.forEach(trip => {
                if (trip.destinationID === destination.id) {
                    acc.push(destination)
                    return acc
                }
                return acc
            })
            return acc
        }, [])
    }
}
module.exports = User