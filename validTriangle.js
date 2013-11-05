//--- INSTRUCTIONS ------------------
/*
    Write a function `validTriangle()` which takes as its input three non-negative numbers.  It should return `true` if the three numbers could form the side lengths of a triangle and `false` otherwise.

    The arguments don't correspond to specific sides.  Don't worry about handling negative inputs: garbage in, garbage out.

    For example,

    validTriangle(0,0,0) # => false, because a triangle can't have 0-length sides

    validTriangle(1,1,1) # => true, an equilateral triangle

    validTriangle(3,4,5) # => true, a right triangle
    validTriangle(4,3,5) # => true, the same right triangle
    validTriangle(5,3,4) # => true, the same right triangle

    validTriangle(10, 10, 100) #=> false, no such triangle exists

    You might want to read [this Wikipedia article about Pythagorean triples:
    http://en.wikipedia.org/wiki/Pythagorean_triple.
*/


//--- CODE --------------------------
var validTriangle = function(a, b, c) {
  return (((a + b) > c) && ((a + c) > b) && ((b + c) > a))
};
