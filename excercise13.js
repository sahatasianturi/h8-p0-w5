function sorting(arrNumber) {

    for (i = 0; i < arrNumber.length - 1; i++) {
        for (j = 0; j < arrNumber.length - i - 1; j++) {
            if (arrNumber[j] < arrNumber[j + 1]) {
                var Besar = arrNumber[j + 1];
                arrNumber[j + 1] = arrNumber[j];
                arrNumber[j] = Besar;
            }


        }
    } return arrNumber
}

function getTotal(arrNumber) {
    var count = 0
    for (k = 0; k < arrNumber.length; k++) {
        if (arrNumber[0] == arrNumber[k]) {
            count += 1
        }
    }
    if (arrNumber.length == 0) {
        return "''"
    } else {
        return 'angka paling besar adalah ' + arrNumber[0] + ' dan kemunculannya ' + count + ' kali'
    }
}


function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''