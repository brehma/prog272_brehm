function MyFunction() { }

MyFunction.prototype.three = 3;

MyFunction.prototype.two = 2;

MyFunction.prototype.string = "Mike Whuzowski!";

MyFunction.prototype.ToString = function () {
	'use strict';
	return String;
};

 var nickName = new MyFunction();
 MyFunction.prototype.nickName = null;
 MyFunction.nickName = MyFunction("Mike Whuzowski".ToString);

MyFunction.prototype.pain = function () {
	'use strict';
	return "This has been a pain!";
};

 var question = new MyFunction();
 MyFunction.prototype.question = null;
 MyFunction.question = true;

MyFunction.prototype.getEight = function() {
    'use strict';
    return 8;
};

 var number = new MyFunction();
 MyFunction.prototype.number = null;
 MyFunction.number = 7;
 
 var number = new MyFunction();
 MyFunction.prototype.number = null;
 MyFunction.number = 2;
 
 var number = new MyFunction();
 MyFunction.prototype.number = null;
 MyFunction.number = 1000;
 
 module.exports.MyFunction = MyFunction;

// Global tests. This is an aside, but some might find it interesting.
// It shows that a require module prevents variables from accidentally
// escaping into the global namespace.

// Here is how to get a variable to escape into the global namespace
// You should, literally, never do this.
global.foo = 'Foo';

// This variable will stay local to this module. It will not be global and
// will not escape into the global namespace.
var bar = 'bar';



