function getPrimes(n) {
    var filter = [];
    var i = []
    var j = []
    primeNumbers = []
    for (i = 2; i <= n; ++i) {
        if (!filter[i]) {
            primeNumbers.push(i);
            for (j = i << 1; j <= n; j += i) {
                filter[j] = true;
            }
        }
    }
    return primeNumbers;
}
exports.getPrimes = getPrimes