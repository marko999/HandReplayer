var hr = hr || {};

hr.parseHandNumber = function(hand){
    var regexp = /(PokerStars Hand #)+[0-9]+/;
    var result = regexp.exec(hand)[0];
    regexp = /#+[0-9]+/;
    return regexp.exec(result)[0];
}

hr.parseTournamentNumber = function(hand){
    var regexp = /(Tournament #)+[0-9]+/;
    var result = regexp.exec(hand)[0];
    regexp = /#+[0-9]+/;
    return regexp.exec(result)[0];
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




