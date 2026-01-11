export interface DSASheetProblem {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    link: string;
    topic: string;
}

export interface DSASheet {
    id: string;
    title: string;
    description: string;
    totalProblems: number;
    problems: DSASheetProblem[];
}

export const dsaSheets: DSASheet[] = [
    {
        id: 'blind-75',
        title: 'Blind 75',
        description: 'The most famous list of 75 essential LeetCode questions.',
        totalProblems: 75,
        problems: [
            // Arrays & Hashing
            { id: 'b75-1', title: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/', topic: 'Arrays' },
            { id: 'b75-2', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', topic: 'Arrays' },
            { id: 'b75-3', title: 'Contains Duplicate', difficulty: 'Easy', link: 'https://leetcode.com/problems/contains-duplicate/', topic: 'Arrays' },
            { id: 'b75-4', title: 'Product of Array Except Self', difficulty: 'Medium', link: 'https://leetcode.com/problems/product-of-array-except-self/', topic: 'Arrays' },
            { id: 'b75-5', title: 'Maximum Subarray', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-subarray/', topic: 'Arrays' },
            { id: 'b75-6', title: 'Maximum Product Subarray', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-product-subarray/', topic: 'Arrays' },
            { id: 'b75-7', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', topic: 'Arrays' },
            { id: 'b75-8', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', topic: 'Arrays' },
            { id: 'b75-9', title: '3Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/3sum/', topic: 'Arrays' },
            { id: 'b75-10', title: 'Container With Most Water', difficulty: 'Medium', link: 'https://leetcode.com/problems/container-with-most-water/', topic: 'Arrays' },
            // DP
            { id: 'b75-11', title: 'Climbing Stairs', difficulty: 'Easy', link: 'https://leetcode.com/problems/climbing-stairs/', topic: 'DP' },
            { id: 'b75-12', title: 'Coin Change', difficulty: 'Medium', link: 'https://leetcode.com/problems/coin-change/', topic: 'DP' },
            { id: 'b75-13', title: 'Longest Increasing Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', topic: 'DP' },
            { id: 'b75-14', title: 'Longest Common Subsequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-common-subsequence/', topic: 'DP' },
            { id: 'b75-15', title: 'Word Break', difficulty: 'Medium', link: 'https://leetcode.com/problems/word-break/', topic: 'DP' },
            { id: 'b75-16', title: 'Combination Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum/', topic: 'DP' },
            { id: 'b75-17', title: 'House Robber', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber/', topic: 'DP' },
            { id: 'b75-18', title: 'House Robber II', difficulty: 'Medium', link: 'https://leetcode.com/problems/house-robber-ii/', topic: 'DP' },
            { id: 'b75-19', title: 'Decode Ways', difficulty: 'Medium', link: 'https://leetcode.com/problems/decode-ways/', topic: 'DP' },
            { id: 'b75-20', title: 'Unique Paths', difficulty: 'Medium', link: 'https://leetcode.com/problems/unique-paths/', topic: 'DP' },
            { id: 'b75-21', title: 'Jump Game', difficulty: 'Medium', link: 'https://leetcode.com/problems/jump-game/', topic: 'DP' },
            // Graphs
            { id: 'b75-22', title: 'Clone Graph', difficulty: 'Medium', link: 'https://leetcode.com/problems/clone-graph/', topic: 'Graph' },
            { id: 'b75-23', title: 'Course Schedule', difficulty: 'Medium', link: 'https://leetcode.com/problems/course-schedule/', topic: 'Graph' },
            { id: 'b75-24', title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', topic: 'Graph' },
            { id: 'b75-25', title: 'Number of Islands', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/', topic: 'Graph' },
            { id: 'b75-26', title: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/', topic: 'Graph' },
            // Trees
            { id: 'b75-27', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', topic: 'Tree' },
            { id: 'b75-28', title: 'Same Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/same-tree/', topic: 'Tree' },
            { id: 'b75-29', title: 'Invert Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/invert-binary-tree/', topic: 'Tree' },
            { id: 'b75-30', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', topic: 'Tree' },
            { id: 'b75-31', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', topic: 'Tree' },
            { id: 'b75-32', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', topic: 'Tree' },
            { id: 'b75-33', title: 'Subtree of Another Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/subtree-of-another-tree/', topic: 'Tree' },
            { id: 'b75-34', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/', topic: 'Tree' },
            { id: 'b75-35', title: 'Validate Binary Search Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/validate-binary-search-tree/', topic: 'Tree' },
            { id: 'b75-36', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', topic: 'Tree' },
            { id: 'b75-37', title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/', topic: 'Tree' },
            { id: 'b75-38', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/', topic: 'Trie' },
            { id: 'b75-39', title: 'Design Add and Search Words Data Structure', difficulty: 'Medium', link: 'https://leetcode.com/problems/design-add-and-search-words-data-structure/', topic: 'Trie' },
            { id: 'b75-40', title: 'Word Search II', difficulty: 'Hard', link: 'https://leetcode.com/problems/word-search-ii/', topic: 'Trie' },
        ]
    },
    {
        id: 'neetcode-150',
        title: 'NeetCode 150',
        description: 'A comprehensive list covering all patterns, an extension of Blind 75.',
        totalProblems: 150,
        problems: [
            // Reusing some Blind 75 and adding more placeholders for brevity in this MVP
            { id: 'nc150-1', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', topic: 'Stack' },
            { id: 'nc150-2', title: 'Generate Parentheses', difficulty: 'Medium', link: 'https://leetcode.com/problems/generate-parentheses/', topic: 'Stack' },
            { id: 'nc150-3', title: 'Daily Temperatures', difficulty: 'Medium', link: 'https://leetcode.com/problems/daily-temperatures/', topic: 'Stack' },
            { id: 'nc150-4', title: 'Car Fleet', difficulty: 'Medium', link: 'https://leetcode.com/problems/car-fleet/', topic: 'Stack' },
            { id: 'nc150-5', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', topic: 'Stack' },
            { id: 'nc150-6', title: 'Binary Search', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-search/', topic: 'Binary Search' },
            { id: 'nc150-7', title: 'Search a 2D Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-a-2d-matrix/', topic: 'Binary Search' },
            { id: 'nc150-8', title: 'Koko Eating Bananas', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/', topic: 'Binary Search' },
            { id: 'nc150-9', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', topic: 'Binary Search' },
            { id: 'nc150-10', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', topic: 'Binary Search' },
            // ... (Would ideally list all 150)
        ]
    },
    {
        id: 'striver-a-z',
        title: "Striver's A-Z DSA",
        description: 'Complete roadmap to master DSA from basics to advanced.',
        totalProblems: 450,
        problems: [
            // 1. Learn the Basics
            { id: 'saz-basic-1', title: 'Count Digits', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/count-digits5716/1', topic: 'Basics' },
            { id: 'saz-basic-2', title: 'Reverse Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-integer/', topic: 'Basics' },
            { id: 'saz-basic-3', title: 'Check Palindrome', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-number/', topic: 'Basics' },
            { id: 'saz-basic-4', title: 'GCD or HCF', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1', topic: 'Basics' },
            { id: 'saz-basic-5', title: 'Armstrong Numbers', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1', topic: 'Basics' },

            // 2. Sorting Techniques
            { id: 'saz-sort-1', title: 'Selection Sort', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/selection-sort/1', topic: 'Sorting' },
            { id: 'saz-sort-2', title: 'Bubble Sort', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/bubble-sort/1', topic: 'Sorting' },
            { id: 'saz-sort-3', title: 'Insertion Sort', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/insertion-sort/1', topic: 'Sorting' },
            { id: 'saz-sort-4', title: 'Merge Sort', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/problems/merge-sort/1', topic: 'Sorting' },
            { id: 'saz-sort-5', title: 'Quick Sort', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/problems/quick-sort/1', topic: 'Sorting' },

            // 3. Arrays
            { id: 'saz-arr-1', title: 'Largest Element in Array', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1', topic: 'Arrays' },
            { id: 'saz-arr-2', title: 'Second Largest Element', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/second-largest-element-in-array3219/1', topic: 'Arrays' },
            { id: 'saz-arr-3', title: 'Check if Array is Sorted and Rotated', difficulty: 'Easy', link: 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/', topic: 'Arrays' },
            { id: 'saz-arr-4', title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/', topic: 'Arrays' },
            { id: 'saz-arr-5', title: 'Move Zeroes', difficulty: 'Easy', link: 'https://leetcode.com/problems/move-zeroes/', topic: 'Arrays' },
            { id: 'saz-arr-6', title: 'Linear Search', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1', topic: 'Arrays' },
            { id: 'saz-arr-7', title: 'Union of Two Sorted Arrays', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1', topic: 'Arrays' },
            { id: 'saz-arr-8', title: 'Missing Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/missing-number/', topic: 'Arrays' },
            { id: 'saz-arr-9', title: 'Max Consecutive Ones', difficulty: 'Easy', link: 'https://leetcode.com/problems/max-consecutive-ones/', topic: 'Arrays' },
            { id: 'saz-arr-10', title: 'Single Number', difficulty: 'Easy', link: 'https://leetcode.com/problems/single-number/', topic: 'Arrays' },
            { id: 'saz-arr-11', title: 'Two Sum', difficulty: 'Easy', link: 'https://leetcode.com/problems/two-sum/', topic: 'Arrays' },
            { id: 'saz-arr-12', title: 'Sort Colors (0s, 1s and 2s)', difficulty: 'Medium', link: 'https://leetcode.com/problems/sort-colors/', topic: 'Arrays' },
            { id: 'saz-arr-13', title: 'Majority Element (>N/2)', difficulty: 'Easy', link: 'https://leetcode.com/problems/majority-element/', topic: 'Arrays' },
            { id: 'saz-arr-14', title: 'Maximum Subarray (Kadane)', difficulty: 'Medium', link: 'https://leetcode.com/problems/maximum-subarray/', topic: 'Arrays' },
            { id: 'saz-arr-15', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', topic: 'Arrays' },
            { id: 'saz-arr-16', title: 'Rearrange Array Elements by Sign', difficulty: 'Medium', link: 'https://leetcode.com/problems/rearrange-array-elements-by-sign/', topic: 'Arrays' },
            { id: 'saz-arr-17', title: 'Next Permutation', difficulty: 'Medium', link: 'https://leetcode.com/problems/next-permutation/', topic: 'Arrays' },
            { id: 'saz-arr-18', title: 'Longest Consecutive Sequence', difficulty: 'Medium', link: 'https://leetcode.com/problems/longest-consecutive-sequence/', topic: 'Arrays' },
            { id: 'saz-arr-19', title: 'Set Matrix Zeroes', difficulty: 'Medium', link: 'https://leetcode.com/problems/set-matrix-zeroes/', topic: 'Arrays' },
            { id: 'saz-arr-20', title: 'Rotate Image', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-image/', topic: 'Arrays' },
            { id: 'saz-arr-21', title: 'Spiral Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/spiral-matrix/', topic: 'Arrays' },

            // 4. Binary Search
            { id: 'saz-bs-1', title: 'Binary Search', difficulty: 'Easy', link: 'https://leetcode.com/problems/binary-search/', topic: 'Binary Search' },
            { id: 'saz-bs-2', title: 'Search Insert Position', difficulty: 'Easy', link: 'https://leetcode.com/problems/search-insert-position/', topic: 'Binary Search' },
            { id: 'saz-bs-3', title: 'Find First and Last Position of Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/', topic: 'Binary Search' },
            { id: 'saz-bs-4', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', topic: 'Binary Search' },
            { id: 'saz-bs-5', title: 'Search in Rotated Sorted Array II', difficulty: 'Medium', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/', topic: 'Binary Search' },
            { id: 'saz-bs-6', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', topic: 'Binary Search' },
            { id: 'saz-bs-7', title: 'Single Element in a Sorted Array', difficulty: 'Medium', link: 'https://leetcode.com/problems/single-element-in-a-sorted-array/', topic: 'Binary Search' },
            { id: 'saz-bs-8', title: 'Find Peak Element', difficulty: 'Medium', link: 'https://leetcode.com/problems/find-peak-element/', topic: 'Binary Search' },
            { id: 'saz-bs-9', title: 'Square Root of an Integer', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/square-root/1', topic: 'Binary Search' },
            { id: 'saz-bs-10', title: 'Nth Root of M', difficulty: 'Easy', link: 'https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1', topic: 'Binary Search' },
            { id: 'saz-bs-11', title: 'Koko Eating Bananas', difficulty: 'Medium', link: 'https://leetcode.com/problems/koko-eating-bananas/', topic: 'Binary Search' },
            { id: 'saz-bs-12', title: 'Minimum Days to Make M Bouquets', difficulty: 'Medium', link: 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/', topic: 'Binary Search' },
            { id: 'saz-bs-13', title: 'Aggressive Cows', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/problems/aggressive-cows/0', topic: 'Binary Search' },
            { id: 'saz-bs-14', title: 'Allocate Books', difficulty: 'Hard', link: 'https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1', topic: 'Binary Search' },
            { id: 'saz-bs-15', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', topic: 'Binary Search' },

            // 5. Linked List
            { id: 'saz-ll-1', title: 'Reverse Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/reverse-linked-list/', topic: 'Linked List' },
            { id: 'saz-ll-2', title: 'Middle of the Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/middle-of-the-linked-list/', topic: 'Linked List' },
            { id: 'saz-ll-3', title: 'Merge Two Sorted Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', topic: 'Linked List' },
            { id: 'saz-ll-4', title: 'Remove Nth Node From End of List', difficulty: 'Medium', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', topic: 'Linked List' },
            { id: 'saz-ll-5', title: 'Add Two Numbers', difficulty: 'Medium', link: 'https://leetcode.com/problems/add-two-numbers/', topic: 'Linked List' },
            { id: 'saz-ll-6', title: 'Delete Node in a Linked List', difficulty: 'Medium', link: 'https://leetcode.com/problems/delete-node-in-a-linked-list/', topic: 'Linked List' },
            { id: 'saz-ll-7', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/', topic: 'Linked List' },
            { id: 'saz-ll-8', title: 'Linked List Cycle', difficulty: 'Easy', link: 'https://leetcode.com/problems/linked-list-cycle/', topic: 'Linked List' },
            { id: 'saz-ll-9', title: 'Linked List Cycle II', difficulty: 'Medium', link: 'https://leetcode.com/problems/linked-list-cycle-ii/', topic: 'Linked List' },
            { id: 'saz-ll-10', title: 'Palindrome Linked List', difficulty: 'Easy', link: 'https://leetcode.com/problems/palindrome-linked-list/', topic: 'Linked List' },
            { id: 'saz-ll-11', title: 'Rotate List', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotate-list/', topic: 'Linked List' },
            { id: 'saz-ll-12', title: 'Copy List with Random Pointer', difficulty: 'Medium', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/', topic: 'Linked List' },

            // 6. Recursion
            { id: 'saz-rec-1', title: 'Subset Sums', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/problems/subset-sums2234/1', topic: 'Recursion' },
            { id: 'saz-rec-2', title: 'Subsets II', difficulty: 'Medium', link: 'https://leetcode.com/problems/subsets-ii/', topic: 'Recursion' },
            { id: 'saz-rec-3', title: 'Combination Sum', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum/', topic: 'Recursion' },
            { id: 'saz-rec-4', title: 'Combination Sum II', difficulty: 'Medium', link: 'https://leetcode.com/problems/combination-sum-ii/', topic: 'Recursion' },
            { id: 'saz-rec-5', title: 'Palindrome Partitioning', difficulty: 'Medium', link: 'https://leetcode.com/problems/palindrome-partitioning/', topic: 'Recursion' },
            { id: 'saz-rec-6', title: 'Permutations', difficulty: 'Medium', link: 'https://leetcode.com/problems/permutations/', topic: 'Recursion' },
            { id: 'saz-rec-7', title: 'N-Queens', difficulty: 'Hard', link: 'https://leetcode.com/problems/n-queens/', topic: 'Recursion' },
            { id: 'saz-rec-8', title: 'Sudoku Solver', difficulty: 'Hard', link: 'https://leetcode.com/problems/sudoku-solver/', topic: 'Recursion' },

            // 7. Stack and Queues
            { id: 'saz-sq-1', title: 'Implement Stack using Queues', difficulty: 'Easy', link: 'https://leetcode.com/problems/implement-stack-using-queues/', topic: 'Stack/Queue' },
            { id: 'saz-sq-2', title: 'Implement Queue using Stacks', difficulty: 'Easy', link: 'https://leetcode.com/problems/implement-queue-using-stacks/', topic: 'Stack/Queue' },
            { id: 'saz-sq-3', title: 'Valid Parentheses', difficulty: 'Easy', link: 'https://leetcode.com/problems/valid-parentheses/', topic: 'Stack/Queue' },
            { id: 'saz-sq-4', title: 'Next Greater Element I', difficulty: 'Easy', link: 'https://leetcode.com/problems/next-greater-element-i/', topic: 'Stack/Queue' },
            { id: 'saz-sq-5', title: 'Next Greater Element II', difficulty: 'Medium', link: 'https://leetcode.com/problems/next-greater-element-ii/', topic: 'Stack/Queue' },
            { id: 'saz-sq-6', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', topic: 'Stack/Queue' },
            { id: 'saz-sq-7', title: 'Sliding Window Maximum', difficulty: 'Hard', link: 'https://leetcode.com/problems/sliding-window-maximum/', topic: 'Stack/Queue' },
            { id: 'saz-sq-8', title: 'Min Stack', difficulty: 'Medium', link: 'https://leetcode.com/problems/min-stack/', topic: 'Stack/Queue' },
            { id: 'saz-sq-9', title: 'Rotting Oranges', difficulty: 'Medium', link: 'https://leetcode.com/problems/rotting-oranges/', topic: 'Stack/Queue' },

            // 8. Trees & Graphs (Selected Important Ones)
            { id: 'saz-tg-1', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', topic: 'Trees' },
            { id: 'saz-tg-2', title: 'Diameter of Binary Tree', difficulty: 'Easy', link: 'https://leetcode.com/problems/diameter-of-binary-tree/', topic: 'Trees' },
            { id: 'saz-tg-3', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', topic: 'Trees' },
            { id: 'saz-tg-4', title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', topic: 'Trees' },
            { id: 'saz-tg-5', title: 'Number of Islands', difficulty: 'Medium', link: 'https://leetcode.com/problems/number-of-islands/', topic: 'Graphs' },
            { id: 'saz-tg-6', title: 'Flood Fill', difficulty: 'Easy', link: 'https://leetcode.com/problems/flood-fill/', topic: 'Graphs' },
            { id: 'saz-tg-7', title: '01 Matrix', difficulty: 'Medium', link: 'https://leetcode.com/problems/01-matrix/', topic: 'Graphs' },
            { id: 'saz-tg-8', title: 'Topological Sort', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/problems/topological-sort/1', topic: 'Graphs' },
            { id: 'saz-tg-9', title: 'Dijkstra Algorithm', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1', topic: 'Graphs' },
        ]
    },
    {
        id: 'performance-marketing',
        title: 'Performance Marketing (Growth School)',
        description: 'Master Performance Marketing: Google Ads, Facebook Ads, Analytics, and Strategy.',
        totalProblems: 54, // Approx count based on extraction
        problems: [
            // Module 1: Starter Kit
            { id: 'pm-m1-1', title: 'Kick-Off Call', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg', topic: 'Module 1: Starter Kit' },
            { id: 'pm-m1-2', title: 'Never miss a Live Event', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m1-2', topic: 'Module 1: Starter Kit' },

            // Module 2: Fundamentals of Performance Marketing
            { id: 'pm-m2-1', title: 'Branding Vs Performance', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m2-1', topic: 'Module 2: Fundamentals' },
            { id: 'pm-m2-2', title: 'Audience Targeting Options', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m2-2', topic: 'Module 2: Fundamentals' },
            { id: 'pm-m2-3', title: 'Competitor Analysis Deep-Dive (Part 1)', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m2-3', topic: 'Module 2: Fundamentals' },
            { id: 'pm-m2-4', title: 'Competitor Analysis Deep-Dive (Part 2)', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m2-4', topic: 'Module 2: Fundamentals' },
            { id: 'pm-m2-5', title: 'Competitor Analysis Deep-Dive (Part 3)', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m2-5', topic: 'Module 2: Fundamentals' },

            // Module 3: Value Propositions, Ad Copy, Creatives & Tests
            { id: 'pm-m3-1', title: 'Core Concept', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m3-1', topic: 'Module 3: Ad Copy & Creative' },
            { id: 'pm-m3-2', title: 'Ad Copy Analysis (Part 1)', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m3-2', topic: 'Module 3: Ad Copy & Creative' },
            { id: 'pm-m3-3', title: 'Ad Copy Analysis (Part 2)', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m3-3', topic: 'Module 3: Ad Copy & Creative' },
            { id: 'pm-m3-4', title: 'Offer Hierarchy (SaaS, E-comm, Info)', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m3-4', topic: 'Module 3: Ad Copy & Creative' },
            { id: 'pm-m3-5', title: 'Landing Page Teardown', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m3-5', topic: 'Module 3: Ad Copy & Creative' },
            { id: 'pm-m3-6', title: 'Practice: Landing Page Teardown & Inspiration', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m3-6', topic: 'Module 3: Ad Copy & Creative' },

            // Module 4: Advanced Conversion Tracking
            { id: 'pm-m4-1', title: 'Conversion Tracking (Cookies, FLoC)', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m4-1', topic: 'Module 4: Tracking' },
            { id: 'pm-m4-2', title: 'GA4 Dashboard Reporting & Analysis', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m4-2', topic: 'Module 4: Tracking' },
            { id: 'pm-m4-3', title: 'Implement Different Events (B2B) In GA', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m4-3', topic: 'Module 4: Tracking' },
            { id: 'pm-m4-4', title: 'GTM Implementation + E-Com Tracking', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m4-4', topic: 'Module 4: Tracking' },
            { id: 'pm-m4-5', title: 'Matomo and Web Analytics Tool Demo', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m4-5', topic: 'Module 4: Tracking' },

            // Module 5: Google Ads Deep Dive
            { id: 'pm-m5-1', title: 'Performance Marketing With Google Ads', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-1', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-2', title: 'Bidding Strategies', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-2', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-3', title: 'Quality Score & Targeting Blueprint', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-3', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-4', title: 'Intro To Google Display & YouTube', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-4', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-5', title: 'Advanced Google Ads Optimization (Part 1)', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-5', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-6', title: 'Google Ads Advanced and Campaign Nomenclature', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-6', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-7', title: 'Display Ad Optimization & Mobile App Optimization', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-7', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-8', title: 'Google Shopping Ads Campaign Structure (Updated 2023)', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-8', topic: 'Module 5: Google Ads' },
            { id: 'pm-m5-9', title: 'Recording- Performance Marketing Week 4 Q&A Session', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m5-9', topic: 'Module 5: Google Ads' },

            // Module 6: Facebook & Google Ads Deep Dive (Part 2)
            { id: 'pm-m6-1', title: 'Objectives, Buying, Pixel, Algorithm', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-1', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-2', title: 'Bid Strats, CBO vs ABO, Funnel', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-2', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-3', title: 'Testing & Scaling Strategies', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-3', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-4', title: 'ROAS Measurement Dashboard', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-4', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-5', title: 'Correlation Study FB Ads Optimization', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-5', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-6', title: 'Brand Lift Experiment', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-6', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-7', title: 'Programmatic Advertising & DV360', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-7', topic: 'Module 6: FB & Google Ads' },
            { id: 'pm-m6-8', title: 'Recording- Performance Marketing Week 5 Q&A Session', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m6-8', topic: 'Module 6: FB & Google Ads' },

            // Module 7: Media Planning and Buying
            { id: 'pm-m7-1', title: 'LinkedIn Ads, ABM, Demand Gen', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m7-1', topic: 'Module 7: Media Planning' },
            { id: 'pm-m7-2', title: 'Alternative Ad Networks', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m7-2', topic: 'Module 7: Media Planning' },
            { id: 'pm-m7-3', title: 'Apple Search Ads', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m7-3', topic: 'Module 7: Media Planning' },
            { id: 'pm-m7-4', title: 'Amazon Ads Optimization', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m7-4', topic: 'Module 7: Media Planning' },
            { id: 'pm-m7-5', title: 'Behavior Scorecard Method', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m7-5', topic: 'Module 7: Media Planning' },

            // Module 8: Media Planning Part 2
            { id: 'pm-m8-1', title: 'Affiliate Marketing & Offer Spying', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-1', topic: 'Module 8: Media Planning II' },
            { id: 'pm-m8-2', title: 'Mobile App UA Strategies', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-2', topic: 'Module 8: Media Planning II' },
            { id: 'pm-m8-3', title: 'CRO: Revenue Multipliers & Funnel Leakage', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-3', topic: 'Module 8: Media Planning II' },
            { id: 'pm-m8-4', title: 'Intro To Media Buying', difficulty: 'Easy', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-4', topic: 'Module 8: Media Planning II' },
            { id: 'pm-m8-5', title: 'Media Plan: Aggregate Level', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-5', topic: 'Module 8: Media Planning II' },
            { id: 'pm-m8-6', title: 'Media Plan For A Tech Service Based Company', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-6', topic: 'Module 8: Media Planning II' },
            { id: 'pm-m8-7', title: 'Media Plan For A Market Research Organization (B2B)', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m8-7', topic: 'Module 8: Media Planning II' },

            // Module 9: Automation & Attribution
            { id: 'pm-m9-1', title: 'Automation, Martech Stacks', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m9-1', topic: 'Module 9: Automation' },
            { id: 'pm-m9-2', title: 'Email Automation & Omni-Channel', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m9-2', topic: 'Module 9: Automation' },
            { id: 'pm-m9-3', title: 'Attribution Models', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m9-3', topic: 'Module 9: Automation' },
            { id: 'pm-m9-4', title: 'Designing Custom Attribution Models', difficulty: 'Hard', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m9-4', topic: 'Module 9: Automation' },
            { id: 'pm-m9-5', title: 'GA4 Attribution', difficulty: 'Medium', link: 'https://mega.nz/folder/0e9DSJJS#N1W5vIZRnlRQwa_v6w4zZg/file/m9-5', topic: 'Module 9: Automation' },
        ]
    }
];
