module.exports = function reverse(n) {
    let result = '';
    let number = '';
    for (let i = 0; i < String(n).length; i++) {
        if (String(n)[i] === "-") {
            result = "" + result;
        } else {
            result = String(n)[i] + result;
        }

    }
    return result;

}
