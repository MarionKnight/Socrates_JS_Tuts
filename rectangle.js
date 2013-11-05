//--- INSTRUCTIONS ------------------
/*
    Write four functions that take a `rectangle` object:

    1. `area(rectangle)`, which returns the area of the rectangle
    2. `perimeter(rectangle)`, which returns the perimeter of the rectangle
    3. `diagonal(rectangle)`, which returns the length of the rectangle's diagonal
    4. `isSquare(rectangle)`, which returns `true` if the rectangle is a square and `false` otherwise

    A few sample rectangle objects have been written for you below.  Assume that all rectangle objects will have a `width` and `height` property.
*/

//--- HINT --------------------------
/*
    You may want to read this article on rectangle diagonals:
    http://www.mathopenref.com/rectanglediagonals.html
*/

//--- CODE --------------------------

var rectOne   = { width: 10, height: 20 };
var rectTwo   = { width: 32, height: 13 };
var rectThree = { width: 20, height: 10 };

var equal = function(rect1, rect2) {
  return ( (rect1.width  == rect2.width && rect1.height == rect2.height ) ||
           (rect1.height == rect2.width && rect1.width  == rect2.height ) );
};

function area(rect) {
    return ( rect.width * rect.height );
};

function perimeter(rect) {
    return ( ( rect.width + rect.height ) * 2 );
};

function diagonal(rect) {
    return ( Math.sqrt( Math.pow( rect.width, 2 ) + Math.pow( rect.height, 2 ) ) );
};

function isSquare(rect) {
    return (rect.width == rect.height);
};

