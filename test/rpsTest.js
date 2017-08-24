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
    describe('Tie Conditions', function () {
        it('Should return "tie" on "rock "rock"', function () {
            expect(rockPaperScissors("rock", "rock")).to.equal("tie");
        })
        it('Should return tie on "paper" "paper"', function () {
            expect(rockPaperScissors("paper", "paper")).to.equal("tie");
        })
        it('Should return tie on "scissors" "scissors"', function () {
            expect(rockPaperScissors("scissors", "scissors")).to.equal("tie");
        })
    })
    describe('Player b winning scenarios', function () {
        it('Should return b on "rock", "scissors"', function () {
            expect(rockPaperScissors("rock", "scissors")).to.equal("a");
        })
        it('Should return b on "scissors, "paper"', function () {
            expect(rockPaperScissors("scissors", "paper")).to.equal("a");
        })
        it('Should return b on "paper", "rock"', function () {
            expect(rockPaperScissors("paper", "rock")).to.equal("a");
        })
    })
    describe('Player b winning scenarios', function () {
        it('Should return b on "scissors", "rock"', function () {
            expect(rockPaperScissors("scissors", "rock")).to.equal("b");
        })
        it('Should return b on "paper", "scissors"', function () {
            expect(rockPaperScissors("paper", "scissors")).to.equal("b");
        })
        it('Should return b on "rock", "paper"', function () {
            expect(rockPaperScissors("rock", "paper")).to.equal("b");
        })
    })
})