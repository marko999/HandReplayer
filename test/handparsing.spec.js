var psHandSample = "PokerStars Hand #119430001460: Tournament #943046970, $1.00+$0.10 USD Hold'em No Limit - Level X (300/600) - 2014/07/30 0:26:23 ET<br/>" +
                   "Table '943046970 83' 9-max Seat #5 is the button<br/>" +
                   "Seat 1: Baron Douro (26850 in chips)<br/>" +
                   "Seat 2: stevestead11 (3775 in chips)<br/>" +
                   "Seat 3: Cunhosky (2000 in chips)<br/>" +
                   "Seat 4: markoAs999 (2000 in chips)<br/>" +
                   "Seat 5: mar azul 444 (35050 in chips)<br/>" +
                   "Seat 6: mica432 (14850 in chips)<br/>" +
                   "Seat 7: RANGERSIOUX (1950 in chips)<br/>" +
                   "Seat 8: pinkolino66 (3950 in chips)<br/>" +
                   "Seat 9: marceloamaro (9825 in chips)<br/>" +
                   "Baron Douro: posts the ante 50<br/>" +
                   "stevestead11: posts the ante 50<br/>" +
                   "Cunhosky: posts the ante 50<br/>" +
                   "markoAs999: posts the ante 50<br/>" +
                   "mar azul 444: posts the ante 50<br/>" +
                   "mica432: posts the ante 50<br/>" +
                   "RANGERSIOUX: posts the ante 50<br/>" +
                   "pinkolino66: posts the ante 50<br/>" +
                   "marceloamaro: posts the ante 50<br/>" +
                   "mica432: posts small blind 300<br/>" +
                   "RANGERSIOUX: posts big blind 600<br/>" +
                       "*** HOLE CARDS ***<br/>" +
                   "Dealt to markoAs999 [Td 4d]<br/>" +
                   "pinkolino66: calls 600<br/>" +
                   "marceloamaro: folds<br/>" +
                   "Baron Douro: folds<br/>" +
                   "stevestead11: raises 3125 to 3725 and is all-in<br/>" +
                   "Cunhosky: calls 1950 and is all-in<br/>" +
                   "markoAs999: folds<br/>" +
                   "mar azul 444: calls 3725<br/>" +
                   "mica432: folds<br/>" +
                   "RANGERSIOUX: calls 1300 and is all-in<br/>" +
                   "pinkolino66: raises 175 to 3900 and is all-in<br/>" +
                   "mar azul 444: calls 175<br/>" +
                       "*** FLOP *** [6h Jc 4h]<br/>" +
                       "*** TURN *** [6h Jc 4h] [7h]<br/>" +
                   "*** RIVER *** [6h Jc 4h 7h] [8s]<br/>" +
                   "*** SHOW DOWN ***<br/>" +
                   "pinkolino66: shows [6s 7s] (two pair, Sevens and Sixes)<br/>" +
                   "mar azul 444: shows [2h 2d] (a pair of Deuces)<br/>" +
                   "pinkolino66 collected 350 from side pot-3<br/>" +
                   "stevestead11: shows [9c Ac] (high card Ace)<br/>" +
                   "pinkolino66 collected 5325 from side pot-2<br/>" +
                   "Cunhosky: shows [Qd Kd] (high card King)<br/>" +
                   "pinkolino66 collected 200 from side pot-1<br/>" +
                   "RANGERSIOUX: shows [Qc Js] (a pair of Jacks)<br/>" +
                   "pinkolino66 collected 10250 from main pot<br/>" +
                   "RANGERSIOUX re-buys and receives 2000 chips for $1.00<br/>" +
                   "Cunhosky re-buys and receives 4000 chips for $2.00<br/>" +
                   "stevestead11 re-buys and receives 4000 chips for $2.00<br/>" +
                       "*** SUMMARY ***<br/>" +
                   "Total pot 16125 Main pot 10250. Side pot-1 200. Side pot-2 5325. Side pot-3 350. | Rake 0<br/>" +
                   "Board [6h Jc 4h 7h 8s]<br/>" +
                   "Seat 1: Baron Douro folded before Flop (didn't bet)<br/>" +
                   "Seat 2: stevestead11 showed [9c Ac] and lost with high card Ace<br/>" +
                   "Seat 3: Cunhosky showed [Qd Kd] and lost with high card King<br/>" +
                   "Seat 4: markoAs999 folded before Flop (didn't bet)<br/>" +
                   "Seat 5: mar azul 444 (button) showed [2h 2d] and lost with a pair of Deuces<br/>" +
                   "Seat 6: mica432 (small blind) folded before Flop<br/>" +
                   "Seat 7: RANGERSIOUX (big blind) showed [Qc Js] and lost with a pair of Jacks<br/>" +
                   "Seat 8: pinkolino66 showed [6s 7s] and won (16125) with two pair, Sevens and Sixes<br/>" +
                   "Seat 9: marceloamaro folded before Flop (didn't bet)";


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
    
    
    
    
});

