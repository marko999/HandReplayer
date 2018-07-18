const hr = require('../source/handParserNew.js');
const expect = require('chai').expect;
const hand = require('./data/pokerstars');


describe("Hand parsing", () => {
    describe("extract lines", ()=>{
        it("pokerstars - extracted 50 lines", ()=>{
            const lines = hr.extractLines(hand);
            expect(lines.length).to.be.eql(50);
        })

        it("pokerstars - third line starts with 'Seat 1'", ()=>{
            const lines = hr.extractLines(hand);
            expect(lines[2]).satisfy(l=>l.indexOf("Seat 1") > -1);
        })

        it("pokerstars - last line starts with 'folded before Flop'", ()=>{
            const lines = hr.extractLines(hand);
            expect(lines[lines.length-1]).satisfy(l=>l.indexOf("folded before Flop") > -1);
        })
    })
    
});
