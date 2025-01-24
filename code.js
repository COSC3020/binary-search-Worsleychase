function binarySearch(list, element) {
    if (list.length == 0) {return -1;}

    console.log(element);
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
            return m;
        }
    }
    return -1;
}
console.log("binarySearch([20,20,20],20)=  " + binarySearch([20,20,20],20));
console.log("binarySearch([20,20,20],50)= " + binarySearch([20,20,20],50));
console.log("binarySearch([20,20,20],19) = " + binarySearch([20,20,20],19));
console.log("binarySearch([20,20,20],-5)= " + binarySearch([20,20,20],-5));
console.log("binarySearch([20,20,20],0) = " + binarySearch([20,20,20],0));
