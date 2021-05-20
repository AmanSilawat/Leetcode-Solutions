/**
 * @param {number[]} nums
 * @return {number[]}
 */
// ! Solution 1
var sortArrayByParity1 = function (nums) {
    let even = [];
    let odd = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            even.push(nums[i]);
        } else {
            odd.push(nums[i]);
        }
    }
    return [...even, ...odd];
};

// ! Solution 2
var sortArrayByParity2 = function (nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i]);
        if (nums[i] % 2 != 0) {
            nums.push(...nums.splice(i, 1));
        }
    }
    return nums;
};

// ! Solution 3
var sortArrayByParity3 = function (nums) {
    for (let i = 0, pointer = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]; // extra stuff to slow performance
            pointer++;
        }
    }
    return nums;
};

// ! Solution 4 (liner time and constant space O(1)) BEST ONE
var sortArrayByParity = function (nums) {
    let event_index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            let a = nums[event_index];
            nums[event_index] = nums[i];
            nums[i] = a;
            event_index++;
        }
    }
    return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [4,2,3,1], [2,4,1,3], and [4,2,1,3]