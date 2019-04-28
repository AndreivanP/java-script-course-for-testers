function countString(stringToLocate, stringToSearch) {
    var count = 0;
    for (let i = 0; i < stringToSearch.length; i++) {
        let newString = stringToSearch.substring(i);
        if (newString.includes(stringToLocate) == true) {
            stringToSearch = newString.replace(stringToLocate, " ");
            count++;
        }
    }
    return console.log("The String " + stringToLocate + " appers " + count + " time(s)");
}

countString("Eu", "Eu não sei Eu sei Eu Eu alksdfj akldEusjfal falkdfj alkdskjf alksdjfasdf Eu alksdfj Eur aldj")
