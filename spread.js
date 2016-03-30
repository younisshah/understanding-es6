/**
  * spread allows you to pass each element of an array as a parameter.
  */

var list = [1, 2, 3, 4];

function foo(i, j, k, l){
    return i*j*k*l;
}

foo(...list); // 24

// ES5 Implementation

var list = [1, 2, 3, 4];

function foo(i, j, k, l) {
    return i * j * k * l;
}

foo.apply(undefined, list); // 24
