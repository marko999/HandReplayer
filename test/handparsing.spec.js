var psHandSample = "PokerStars Hand #119430001460: Tournament #943046970, $1.00+$0.10 USD Hold'em No Limit - Level X (300/600) - 2014/07/30 0:26:23 ET Table '943046970 83' 9-max Seat #5 is the button Seat 1: Baron Douro (26850 in chips)Seat 2: stevestead11 (3775 in chips) Seat 3: Cunhosky (2000 in chips) Seat 4: markoAs999 (2000 in chips) Seat 5: mar azul 444 (35050 in chips) Seat 6: mica432 (14850 in chips) Seat 7: RANGERSIOUX (1950 in chips) Seat 8: pinkolino66 (3950 in chips) Seat 9: marceloamaro (9825 in chips) Baron Douro: posts the ante 50 stevestead11: posts the ante 50 Cunhosky: posts the ante 50 markoAs999: posts the ante 50 mar azul 444: posts the ante 50 mica432: posts the ante 50 RANGERSIOUX: posts the ante 50 pinkolino66: posts the ante 50 marceloamaro: posts the ante 50 mica432: posts small blind 300 RANGERSIOUX: posts big blind 600 *** HOLE CARDS *** Dealt to markoAs999 [Td 4d] pinkolino66: calls 600 marceloamaro: folds Baron Douro: folds stevestead11: raises 3125 to 3725 and is all-in Cunhosky: calls 1950 and is all-in markoAs999: folds mar azul 444: calls 3725 mica432: folds RANGERSIOUX: calls 1300 and is all-in pinkolino66: raises 175 to 3900 and is all-in mar azul 444: calls 175 *** FLOP *** [6h Jc 4h] *** TURN *** [6h Jc 4h] [7h] *** RIVER *** [6h Jc 4h 7h] [8s] *** SHOW DOWN *** pinkolino66: shows [6s 7s] (two pair, Sevens and Sixes) mar azul 444: shows [2h 2d] (a pair of Deuces) pinkolino66 collected 350 from side pot-3 stevestead11: shows [9c Ac] (high card Ace) pinkolino66 collected 5325 from side pot-2 Cunhosky: shows [Qd Kd] (high card King) pinkolino66 collected 200 from side pot-1 RANGERSIOUX: shows [Qc Js] (a pair of Jacks) pinkolino66 collected 10250 from main pot RANGERSIOUX re-buys and receives 2000 chips for $1.00 Cunhosky re-buys and receives 4000 chips for $2.00 stevestead11 re-buys and receives 4000 chips for $2.00 *** SUMMARY *** Total pot 16125 Main pot 10250. Side pot-1 200. Side pot-2 5325. Side pot-3 350. | Rake 0 Board [6h Jc 4h 7h 8s] Seat 1: Baron Douro folded before Flop (didn't bet) Seat 2: stevestead11 showed [9c Ac] and lost with high card Ace Seat 3: Cunhosky showed [Qd Kd] and lost with high card King Seat 4: markoAs999 folded before Flop (didn't bet) Seat 5: mar azul 444 (button) showed [2h 2d] and lost with a pair of Deuces Seat 6: mica432 (small blind) folded before Flop Seat 7: RANGERSIOUX (big blind) showed [Qc Js] and lost with a pair of Jacks Seat 8: pinkolino66 showed [6s 7s] and won (16125) with two pair, Sevens and Sixes Seat 9: marceloamaro folded before Flop (didn't bet)";


describe("Hand parsing summary:", function() {
    beforeEach(function(){
        this.hand = psHandSample;
    })

    it("hand properly loaded", function() {
        expect(this.hand != undefined).toBe(true);
    });

    it("hand number", function(){
        var handNumber = hr.parseHandNumber(this.hand);
        expect(handNumber).toEqual("#119430001460");
    });

    it("tournament number", function(){
       var tournamentNumber = hr.parseTournamentNumber(this.hand);
       expect(tournamentNumber).toEqual("#943046970");
    });

    it("buyin", function(){
        var buyin = hr.parseBuyIn(this.hand);
        expect(buyin).toEqual("$1.00+$0.10 USD");
    });

    it("level", function(){
       var level = hr.parseLevel(this.hand);
        expect(level).toEqual("Level X (300/600)");
    });

    it("date", function(){
       var date = hr.parseDate(this.hand);
        expect(date).toEqual("2014/07/30 0:26:23 ET");
    });

    it("type of game", function(){
        var type = hr.parseTypeOfGame(this.hand);
        expect(type).toEqual("Hold'em No Limit");
    })
    
    it("table number", function(){
       var table = hr.parseTableNumber(this.hand);
        expect(table).toEqual("943046970 83");
    });

    it("table type", function(){
        var ttype = hr.parseTableType(this.hand);
        expect(ttype).toEqual("9-max");
    });

    it("where is the button", function(){
        var buttonPosition = hr.parseButtonInfo(this.hand);
        expect(buttonPosition).toEqual('5');
    })
    
    it("parse seat 1", function(){
        var seatString = "Seat 1: Baron Douro (26850 in chips)";
        var seatInfo = hr.parseSeat(seatString);
        expect(seatInfo.seat).toEqual('1');
        expect(seatInfo.name).toEqual('Baron Douro');
        expect(seatInfo.stack).toEqual('26850');
        
    })
    
    it("parse seat 5", function(){
        var seatString = "Seat 5: mar azul 444 (35050 in chips)";
        var seatInfo = hr.parseSeat(seatString);
        expect(seatInfo.seat).toEqual('5');
        expect(seatInfo.name).toEqual('mar azul 444');
        expect(seatInfo.stack).toEqual('35050');
    })
    
    it("parse seat 4", function(){
        var seatString = "Seat 4: markoAs999 (2000 in chips)";
        var seatInfo = hr.parseSeat(seatString);
        expect(seatInfo.seat).toEqual('4');
        expect(seatInfo.name).toEqual('markoAs999');
        expect(seatInfo.stack).toEqual('2000');
    })

    it("parse all seats", function(){
        var seatInfo = hr.parseAllSeats(this.hand);

        expect(seatInfo[0].seat).toEqual('1');
        expect(seatInfo[0].name).toEqual('Baron Douro');
        expect(seatInfo[0].stack).toEqual('26850');

        expect(seatInfo[1].seat).toEqual('2');
        expect(seatInfo[1].name).toEqual('stevestead11');
        expect(seatInfo[1].stack).toEqual('3775');

        expect(seatInfo[2].seat).toEqual('3');
        expect(seatInfo[2].name).toEqual('Cunhosky');
        expect(seatInfo[2].stack).toEqual('2000');

        expect(seatInfo[3].seat).toEqual('4');
        expect(seatInfo[3].name).toEqual('markoAs999');
        expect(seatInfo[3].stack).toEqual('2000');

        expect(seatInfo[4].seat).toEqual('5');
        expect(seatInfo[4].name).toEqual('mar azul 444');
        expect(seatInfo[4].stack).toEqual('35050');

        expect(seatInfo[5].seat).toEqual('6');
        expect(seatInfo[5].name).toEqual('mica432');
        expect(seatInfo[5].stack).toEqual('14850');

        expect(seatInfo[6].seat).toEqual('7');
        expect(seatInfo[6].name).toEqual('RANGERSIOUX');
        expect(seatInfo[6].stack).toEqual('1950');

        expect(seatInfo[7].seat).toEqual('8');
        expect(seatInfo[7].name).toEqual('pinkolino66');
        expect(seatInfo[7].stack).toEqual('3950');

        expect(seatInfo[8].seat).toEqual('9');
        expect(seatInfo[8].name).toEqual('marceloamaro');
        expect(seatInfo[8].stack).toEqual('9825');

    })
    
    
});

