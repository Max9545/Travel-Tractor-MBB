import chai from 'chai';
const expect = chai.expect;

import travelersTestData from '../test-data/travelers-test-data.js'
import tripsTestData from '../test-data/trips-test-data.js'
import destinationsTestData from '../test-data/destinations-test-data.js'
import Trip from '/Users/maxbregman/Turing_Main/Mod2/projects/Mod2_Travel_Tractor/Travel-Tractor-MBB/src/trip.js'
import User from '/Users/maxbregman/Turing_Main/Mod2/projects/Mod2_Travel_Tractor/Travel-Tractor-MBB/src/user.js'



let user, testUserData


describe('Make a User Class', function() {
    beforeEach(() => {
        user = new User(travelersTestData[29])
        testUserData = travelersTestData[0]
    })
    it('should have a name', function() {
        console.log(testUserData);
        expect(user.name).to.equal(testUserData.name)
    })
    it('should have a type', function() {
        console.log(testUserData);
        expect(user.type).to.equal(testUserData.type)
    })
    it('should have a id', function() {
        console.log(testUserData);
        expect(user.id).to.equal(testUserData.id)
    })
    it.only('should see if the trip occured in the last year', function() {

        expect(user.checkDate("2019/09/16")).to.equal(false)

        expect(user.checkDate("2020/09/16")).to.equal(true)
    })
    it('should return an estimated cost for the year (plus agents 10%)', function() {

        let estimatedCost = user.calculateSumCostOfYear(tripsTestData, destinationsTestData)

        expect(estimatedCost).to.equal(1155)
    })
})