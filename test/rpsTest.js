var rockPaperScissors = require('../rps').rockPaperScissors;
var expect = require('chai').expect;

describe('rockPaperScissors', function () {
    describe('Smoke Tests', function () {
        it('Should exist.', function () {
            expect(rockPaperScissors).to.exist;
        })
        it('Should be a function.', function () {
            expect(rockPaperScissors).to.be.a('function');
        })
    })
    describe('Tie Conditions', function() {
        it('Should return "tie" on "rock "rock"', function () {
            
        })

    })
})