var hr = hr || {};


hr.parseBuyIn = function(hand){
    var regexp = /\$[0-9]+\.[0-9]+\+\$[0-9]+\.[0-9]+ [A-Z]{1,3}/;
    return regexp.exec(hand)[0];
}


hr.parseTypeOfGame = function(hand){
    var regexp = /Hold'em\s[A-Z][a-z]+.\s?[A-Za-z]+/;
    return regexp.exec(hand)[0];
}

hr.parseTableType = function(hand){
    var regexp = /Table '\d+\s?\d+'\s(\d-max)/;
    return regexp.exec(hand)[1];
}

hr.parseButtonInfo = function(hand){
    var regexp = /Seat\s#(\d)/;
    return regexp.exec(hand)[1];
}

hr.parseSeat = function(seatString){
    var regexp = /Seat\s(\d):\s([\w\p\s]+)\((\d+)\sin\schips\)/;
    var info = {};
    var result = regexp.exec(seatString);
    info.seat = result[1];
    info.name = result[2].trim();
    info.stack = result[3];
    return info;
}

hr.parseAllSeats = function(hand){
    var regexp = /Seat\s(\d):\s([\w\p\s]+)\((\d+)\sin\schips\)/g;
    var myArray = [];
    var matches;

    while (matches = regexp.exec(hand)) {
        myArray.push(matches[0]);
    }
    return myArray.map(m=>{
        const seatInfo = hr.parseSeat(m);
        return {
            seat: seatInfo.seat,
            name: seatInfo.name,
            stack: seatInfo.stack
        }
    })
}

hr.parseAntes = function(hand){
    
}

module.exports = hr;
