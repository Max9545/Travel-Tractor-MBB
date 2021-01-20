import chai from 'chai';
const expect = chai.expect;

import tripsTestData from '../test-data/trips-test-data.js'
import destinationsTestData from '../test-data/destinations-test-data.js'
import Trip from '/Users/maxbregman/Turing_Main/Mod2/projects/Mod2_Travel_Tractor/Travel-Tractor-MBB/src/trip.js'

let newTrip, testTripObj


describe('Make a useful Trip Class', function() {
    beforeEach(() => {
        newTrip = new Trip(tripsTestData[0])
        testTripObj = tripsTestData[0]
    })

    it('should have a date', function() {

        expect(newTrip.date).to.equal(testTripObj.date);
    });


    it('should have a duration', function() {

        expect(newTrip.duration).to.equal(testTripObj.duration);
    })

    it('should have a number of travelers', function() {

        expect(newTrip.travelers).to.equal(testTripObj.travelers);
    })

    it('should have a destinationID', function() {

        expect(newTrip.destinationID).to.equal(testTripObj.destinationID);
    })

    it('should return a trip cost', function() {

        expect(newTrip.calculateTripCost(destinationsTestData)).to.equal(5918);
    })
})