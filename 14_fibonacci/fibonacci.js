const fibonacci = function(num) {
    if (typeof num === 'string') {
        num = parseInt(num);
    }

    let prevprev = 0;
    let prev = 1;
    let curr = 1;
    for (let i = 2; i <= num; i++) {
        curr = prev + prevprev;
        prevprev = prev;
        prev = curr;
    }
    return num === 0 ? 0 : num < 0 ? "OOPS" : curr;
};

// Do not edit below this line
module.exports = fibonacci;
