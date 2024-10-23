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

The asymptotic runtime for the number of comparisons should be big Theta n^2. It should be this way based on the way i wrote it because it takes n - the sorted part of the array, and each of the sorted part of the array gets smaller as it gets more sorted summing up to another n making it n^2.
The asymptotic runtime for the number of flips should be big Theta n^2 aswell. It should be this way because the way i wrote it, the unsorted array flips twice, once it flips the largest element in the unsorted part to the front, and then it flips it into the correctly sorted position. The worst case it would look at each element in the unsorted part of the array giving in time n and it has to find the right position to place the largest element going through the array again making it big theta of n^2.
