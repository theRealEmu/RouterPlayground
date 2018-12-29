console.log("app.js is online :)");

let re, result, str;


//.exec() - return an array with [[0]theFirstValueItFinds, .index, .input, length]
re = /hello/;
console.log("re.exec('I think I said hello my Dear'): "); 
console.log(re.exec("I think I said hello my Dear"));


//.test() - returns a boolean
result = re.test("Hello");
console.log("re.test('Hello');: " + result);


//i = !CaseSensitive
re = /hello/i;
result = re.test("Hello");
console.log("re.test('Hello');: " + result);


//g = global Search /hello/g
re = /hello/ig;
result = re.exec('Hello, hello hello, hello');
console.log("global Search /hello/g: ");
console.log(result);


//.match() - returns an array or null /hello/g
re = /hello/g;
str = "Hello There, hello nobody, hello kitty";
result = str.match(re);
console.log(".match() - returns an array or null /hello/g");
console.log(result);

//.search() returns index of first match, or -1
re = /hello/;
str = "Hello There, hello nobody, hello kitty";
result = str.search(re);
console.log(".search() returns index of first match, or -1 /hello/");
console.log(result);


//.replace() - returns a new string with some or all matches
re = /hello/g;
str = "Hello There, hello nobody, hello kitty";
result = str.replace(re, 'Hi');
console.log("str.replace(re, 'Hi'); /hello/g");
console.log(result);