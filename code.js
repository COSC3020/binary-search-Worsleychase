function binarySearch(list, element) {
    if (list.length == 0) {return -1;}

    var L = 0;
    var R = list.length - 1;
    while (R >= L) {
        var m = Math.floor((R+L) / 2); // floor needed because m can sometimes be a float, such as 0.5, which isn't a proper index.
        currentElement = list[m]
        if (currentElement < element) { // Go right
            L = m + 1;
        } 
        else if (currentElement > element){ // Go left
            R = m - 1;
        } else {
            return m;
        }
    }
    return -1;
}
