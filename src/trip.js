class Trip {
    constructor(tripInfo) {
        this.date = tripInfo.date
        this.duration = tripInfo.duration
        this.travelers = tripInfo.travelers
        this.destinationID = tripInfo.destinationID
    }
}
module.exports = Trip