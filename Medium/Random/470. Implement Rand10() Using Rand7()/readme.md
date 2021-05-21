# 470. Implement Rand10() Using Rand7()

**Question on :** [Leetcode](https://leetcode.com/problems/implement-rand10-using-rand7/)

**Solution on :** [My Git](https://github.com/AmanSilawat/Leetcode-Solutions/tree/master/Medium/Random/470.%20Implement%20Rand10()%20Using%20Rand7()/script.js)

Given the API rand7() that generates a uniform random integer in the range [1, 7], write a function rand10() that generates a uniform random integer in the range [1, 10]. You can only call the API rand7(), and you shouldn't call any other API. Please do not use a language's built-in random API.

Each test case will have one internal argument n, the number of times that your implemented function rand10() will be called while testing. Note that this is not an argument passed to rand10().

Follow up:

What is the expected value for the number of calls to rand7() function?
Could you minimize the number of calls to rand7()?
 

**Example 1:**
```js
Input: n = 1
Output: [2]
```
**Example 2:**

```js
Input: n = 2
Output: [2,8]
```

**Example 3:**

```js
Input: n = 3
Output: [3,8,10]
```
 

**Constraints:**

1 <= n <= 105