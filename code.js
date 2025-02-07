/*
Implement a binary search function that, given a sorted list and an element to look for, returns the index of the element in the list or -1 if the element is not there.
*/

function binarySearch(list, element) {
    if (list.length == 0) {return -1;}

    var L = 0;
    var R = list.length - 1;
    while (R >= L) {
        var m = Math.floor((R+L) / 2); // floor needed because m can sometimes be a float, such as 0.5, which isn't a proper index.
        if (list[m] < element) { // Go right
            L = m + 1;
        } 
        else if (list[m] > element){ // Go left
            R = m - 1;
        } else {
            if (list[m-1] == element) {
                R = m - 1;
            } else {
                return m;
            }
        }
    }
    return -1;
}
