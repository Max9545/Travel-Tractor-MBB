import chai from 'chai';
const expect = chai.expect;

import travelersTestData from '../test-data/travelers-test-data.js'
import tripsTestData from '../test-data/trips-test-data.js'
import destinationsTestData from '../test-data/destinations-test-data.js'


describe('See if the tests are running', function() {
    it('should return true', function() {
        console.log(travelersTestData)
        console.log(tripsTestData);
        console.log(destinationsTestData);
        expect(true).to.equal(true);
    });
});