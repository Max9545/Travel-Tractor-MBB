import chai from 'chai';
const expect = chai.expect;

import travelersTestData from '../test-data/travelers-test-data.js'
import tripsTestData from '../test-data/trips-test-data.js'
import destinationsTestData from '../test-data/destinations-test-data.js'
import User from '/Users/maxbregman/Turing_Main/Mod2/projects/Mod2_Travel_Tractor/Travel-Tractor-MBB/src/user.js'

let user, testUserData

describe('Make a User Class', function() {
    beforeEach(() => {

        user = new User(travelersTestData[29], tripsTestData)

        testUserData = travelersTestData[29]
    })

    it('should have a name', function() {



        expect(user.name).to.equal(testUserData.name)
    })

    it('should have a type', function() {

        expect(user.type).to.equal(testUserData.travelerType)
    })

    it('should have a id', function() {



        expect(user.id).to.equal(testUserData.id)
    })

    it('should see if the trip occured in the last year', function() {

        expect(user.checkIfTripHappenedThisYear("2019/09/16")).to.equal(false)

        expect(user.checkIfTripHappenedThisYear("2020/09/16")).to.equal(true)
    })

    it('should return a trips flight cost', function() {

        expect(user.calculateFlightCost(destinationsTestData[0], tripsTestData[0])).to.equal(800)
    })

    it('should return an estimated cost for the year (plus agents 10%)', function() {

        let estimatedCost = user.calculateSumCostOfYear(tripsTestData, destinationsTestData)

        expect(estimatedCost).to.equal(13420)
    })
})