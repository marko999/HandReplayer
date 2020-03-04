describe("mock suit", () => {
  test("mock test ", () => {});
});

// var hr = require('../source/handParser.js');
// var expect = require('chai').expect;

// var psHandSample = `PokerStars Hand #119426811086: Tournament #943047725, $0.75+$0.07 USD Hold'em No Limit - Level XIV (250/500) - 2014/07/29 21:30:30 ET
//                     Table '943047725 27' 9-max Seat #8 is the button
//                     Seat 1: GCSANTOS10 (17670 in chips)
//                     Seat 2: markoAs999 (11224 in chips)
//                     Seat 3: Martin Royle (13085 in chips)
//                     Seat 4: CARMINATTI88 (17438 in chips)
//                     Seat 5: xxxxxxxx_br (1610 in chips)
//                     Seat 6: ThiagodLara (3945 in chips)
//                     Seat 8: nobby24480 (9416 in chips)
//                     Seat 9: lzduda (2635 in chips)
//                     GCSANTOS10: posts the ante 60
//                     markoAs999: posts the ante 60
//                     Martin Royle: posts the ante 60
//                     CARMINATTI88: posts the ante 60
//                     xxxxxxxx_br: posts the ante 60
//                     ThiagodLara: posts the ante 60
//                     nobby24480: posts the ante 60
//                     lzduda: posts the ante 60
//                     lzduda: posts small blind 250
//                     GCSANTOS10: posts big blind 500
//                     *** HOLE CARDS ***
//                     Dealt to markoAs999 [Qc 4s]
//                     markoAs999: folds
//                     Martin Royle: folds
//                     CARMINATTI88: raises 500 to 1000
//                     xxxxxxxx_br: folds
//                     ThiagodLara: raises 2885 to 3885 and is all-in
//                     nobby24480: folds
//                     lzduda: folds
//                     GCSANTOS10: folds
//                     CARMINATTI88: calls 2885
//                     *** FLOP *** [7d 8d Qd]
//                     *** TURN *** [7d 8d Qd] [9h]
//                     *** RIVER *** [7d 8d Qd 9h] [2c]
//                     *** SHOW DOWN ***
//                     CARMINATTI88: shows [Ks 9c] (a pair of Nines)
//                     ThiagodLara: shows [Kh Ac] (high card Ace)
//                     CARMINATTI88 collected 9000 from pot
//                     ThiagodLara finished the tournament in 413th place
//                     *** SUMMARY ***
//                     Total pot 9000 | Rake 0
//                     Board [7d 8d Qd 9h 2c]
//                     Seat 1: GCSANTOS10 (big blind) folded before Flop
//                     Seat 2: markoAs999 folded before Flop (didn't bet)
//                     Seat 3: Martin Royle folded before Flop (didn't bet)
//                     Seat 4: CARMINATTI88 showed [Ks 9c] and won (9000) with a pair of Nines
//                     Seat 5: xxxxxxxx_br folded before Flop (didn't bet)
//                     Seat 6: ThiagodLara showed [Kh Ac] and lost with high card Ace
//                     Seat 8: nobby24480 (button) folded before Flop (didn't bet)
//                     Seat 9: lzduda (small blind) folded before Flop`

// describe("Hand parsing summary:", function() {
//     beforeEach(function(){
//         this.hand = psHandSample;
//     })

//     it("hand properly loaded", function() {
//         expect(this.hand != undefined).to.equal(true);
//     });

//     it("buyin", function(){
//         var buyin = hr.parseBuyIn(this.hand);
//         expect(buyin).to.equal("$0.75+$0.07 USD");
//     });

//     it("type of game", function(){
//         var type = hr.parseTypeOfGame(this.hand);
//         expect(type).to.equal("Hold'em No Limit");
//     })

//     it("table type", function(){
//         var ttype = hr.parseTableType(this.hand);
//         expect(ttype).to.equal("9-max");
//     });

//     it("where is the button", function(){
//         var buttonPosition = hr.parseButtonInfo(this.hand);
//         expect(buttonPosition).to.equal('8');
//     })

//     it("parse all seats", function(){
//         var seatInfo = hr.parseAllSeats(this.hand);

//         expect(seatInfo[0].seat).to.equal('1');
//         expect(seatInfo[0].name).to.equal('GCSANTOS10');
//         expect(seatInfo[0].stack).to.equal('17670');

//         expect(seatInfo[1].seat).to.equal('2');
//         expect(seatInfo[1].name).to.equal('markoAs999');
//         expect(seatInfo[1].stack).to.equal('11224');

//         expect(seatInfo[2].seat).to.equal('3');
//         expect(seatInfo[2].name).to.equal('Martin Royle');
//         expect(seatInfo[2].stack).to.equal('13085');

//         expect(seatInfo[3].seat).to.equal('4');
//         expect(seatInfo[3].name).to.equal('CARMINATTI88');
//         expect(seatInfo[3].stack).to.equal('17438');

//         expect(seatInfo[4].seat).to.equal('5');
//         expect(seatInfo[4].name).to.equal('xxxxxxxx_br');
//         expect(seatInfo[4].stack).to.equal('1610');

//         expect(seatInfo[5].seat).to.equal('6');
//         expect(seatInfo[5].name).to.equal('ThiagodLara');
//         expect(seatInfo[5].stack).to.equal('3945');

//         expect(seatInfo[6].seat).to.equal('8');
//         expect(seatInfo[6].name).to.equal('nobby24480');
//         expect(seatInfo[6].stack).to.equal('9416');

//         expect(seatInfo[7].seat).to.equal('9');
//         expect(seatInfo[7].name).to.equal('lzduda');
//         expect(seatInfo[7].stack).to.equal('2635');

//     })
// });
