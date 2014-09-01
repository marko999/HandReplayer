var hr = hr || {};

hr.parseHandNumber = function(hand){
    var regexp = /PokerStars\sHand\s(#\d+)/;
    return regexp.exec(hand)[1];
}

hr.parseTournamentNumber = function(hand){
    var regexp = /Tournament (#\d+)/;
    return regexp.exec(hand)[1];
}

hr.parseBuyIn = function(hand){
    var regexp = /\$[0-9]+\.[0-9]+\+\$[0-9]+\.[0-9]+ [A-Z]{1,3}/;
    return regexp.exec(hand)[0];
}

hr.parseLevel = function(hand){
    var regexp = /(Level )[A-Z] \([0-9]+\/[0-9]+\)/;
    return regexp.exec(hand)[0];
}

hr.parseDate = function(hand){
    var regexp = /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+:[0-9]+:[0-9]+ [A-Z]+/;
    return regexp.exec(hand)[0];
}

hr.parseTypeOfGame = function(hand){
    var regexp = /Hold'em\s[A-Z][a-z]+.\s?[A-Za-z]+/;
    return regexp.exec(hand)[0];
}

hr.parseTableNumber = function(hand){
    var regexp = /Table\s'(\d+\s\d+)'/;
    return regexp.exec(hand)[1];
}

hr.parseTableType = function(hand){
    var regexp = /Table '\d+\s?\d+'\s(\d-max)/;
    return regexp.exec(hand)[1];
}

hr.parseButtonInfo = function(hand){
    var regexp = /Seat\s#(\d)/;
    return regexp.exec(hand)[1];
}




