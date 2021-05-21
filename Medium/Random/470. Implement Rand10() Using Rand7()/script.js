/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    while (true) {
        let row = 7 * (rand7() - 1);
        let col = rand7();
        let tot = row + col;
        if (tot <= 40) {
            return 1 + (tot - 1) % 10;
        }
    }
};

function rand7() {
    return Math.ceil(Math.random() * 10);
}

console.log(rand10())