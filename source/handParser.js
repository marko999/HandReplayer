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



