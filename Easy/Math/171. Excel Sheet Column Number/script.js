var titleToNumber = function (columnTitle) {
    const ALPHA_NUM = 26;
    let res = 0;
    for (let i = columnTitle.length - 1, p = 0; i >= 0; i--, p++) {
        res += (ALPHA_NUM ** p) * (columnTitle.charCodeAt(i) - 64);
    }
    return res;
};

console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('ZY')); // 701
console.log(titleToNumber('ZZ')); // 702
console.log(titleToNumber('AZA')); // 1353
console.log(titleToNumber('FXSHRXW')); // 2147483647