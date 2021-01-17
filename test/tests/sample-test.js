import chai from 'chai';
const expect = chai.expect;

import travelersTestData from '../test-data/travelers-test-data.js'
import tripsTestData from '../test-data/trips-test-data.js'
import destinationsTestData from '../test-data/destinations-test-data.js'
import Trip from '/Users/maxbregman/Turing_Main/Mod2/projects/Mod2_Travel_Tractor/Travel-Tractor-MBB/src/trip.js'

let newTrip
let testTripObj

describe('See if the tests are running', function() {
    beforeEach(() => {
        newTrip = new Trip(tripsTestData[0])
        testTripObj = tripsTestData[0]
    })



    it('should return a date', function() {
        // console.log(travelersTestData)
        // console.log(tripsTestData);
        // console.log(destinationsTestData);

        expect(newTrip.date).to.equal(testTripObj.date);
    });


    it('should return a duration', function() {
        expect(newTrip.duration).to.equal(testTripObj.duration);
    })
})