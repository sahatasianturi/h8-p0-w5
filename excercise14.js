function changeVocals(str) {
    var huruf = ('aiueo')
    var ubah = ('bjvfp')
    var tampung = ''
    for (i = 0; i < str.length; i++) {
        var flag = false
        var index = 0
        for (j = 0; j < huruf.length; j++) {
            if (str[i] == huruf[j]) {
                flag = true
                index = j
            }
        }
        if (flag) {
            tampung += ubah[index]
        }
        else {
            tampung += str[i]
        }
    }
    return tampung
}
function reverseWord(str) {
    tampung = ''
    for (k = str.length - 1; k >= 0; k--) {
        tampung += str[k]
    }
    return tampung
}

function setLowerUpperCase(str) {
    var ubahKalimat = ''
    for (i = 0; i < str.length; i++) {
        var ubahHuruf = str[i]
        if (ubahHuruf == ubahHuruf.toLowerCase()) {
            ubahHuruf = ubahHuruf.toUpperCase()
        }
        else {
            ubahHuruf = ubahHuruf.toLowerCase()
        } ubahKalimat += ubahHuruf
    }
    return ubahKalimat

}

function removeSpaces(str) {
    var spasi = ''
    for (l = 0; l < str.length; l++) {
        if (str[l] == ' ') {
            spasi += ''
        }
        else {
            spasi += str[l]
        }
    }
    return spasi
}

function passwordGenerator(name) {
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    else {
        var hasil = changeVocals(name)
        var hasil1 = setLowerUpperCase(hasil)
        var hasil2 = changeVocals(hasil1)
        var hasil3 = reverseWord(hasil2)
        var hasil4 = removeSpaces(hasil3)
        return hasil4
    }

}
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'