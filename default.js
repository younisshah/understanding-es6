/**
  * default, param created in function args and passed a default value
  */

function foo(msg="I am default"){
  return msg;
}

foo(); // I am default

/**
 * ES5 version
 */
function foo() {
    var msg = arguments.length <= 0 || arguments[0] === undefined ? "I am default" : arguments[0];

    return msg;
}

foo(); // I am default
