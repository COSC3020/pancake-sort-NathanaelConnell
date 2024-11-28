# Pancake Sort

There is an abstract data type (ADT) called a _pancake array_, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a _single_
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

I worked on some of this assignment with Megan, Olivia, and Ashlyn.

The asymptotic runtime for the number of comparisons should be big Theta n^2. In terms of flips it should be big theta (n).  For comparisons the algorithm compares elements to find the largest element in the unsorted portion of the array during each iteration of the while loop so it comes out to be n(n-1)/2 when summing over the runtime of the algorthim, which simplifies to big theta (n^2).  For flips the algorithm performs at most two flips per iteration of the while loop, and since the while loop runs n times in the worst case the total number of flips at most is 2n, so the runtime is big theta (n).  Comparisons dominate the runtime because the number of comparisons grows quadratically as the size of the unsorted portion of the array decreases, and this is due to the nested behavior of the while loop and the for loop.  The number of flips grows linearly because the algorithm performs a constant number of flips during each iteration of the while loop.
