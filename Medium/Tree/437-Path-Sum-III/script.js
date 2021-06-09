/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * } 
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(10);
root.left = new Node(5);
root.right = new Node(-3);
root.right.right = new Node(11);

root.left.left = new Node(3);
root.left.right = new Node(2);
root.left.right.right = new Node(1);

root.left.left.left = new Node(3);
root.left.left.right = new Node(-2);



// BST.insert(11);
// console.log(root)
// console.log(JSON.stringify(root))


class Solution {
    constructor() {
        this.total = 0;
    }

    pathSum(root, sum) {
        if (root == null) {
            return 0;
        }
        this.findPathSum(root, sum, 0);
        this.pathSum(root.left, sum);
        this.pathSum(root.right, sum);

        return this.total;
    }
    findPathSum(root, sum, current_sum) {
        if (root == null) {
            return;
        }

        current_sum += root.val;

        if (sum == current_sum) {
            this.total++;
        }

        this.findPathSum(root.left, sum, current_sum);
        this.findPathSum(root.right, sum, current_sum);
    }
}

const solution_ins = new Solution();
const res = solution_ins.pathSum(root, 8);

console.log(res)