const name ="harsh"
const repo = 50

console.log (name+repo +"value");  // 1st

console.log(`Hello my name is ${name} and my repo count is ${repo}`); // 2nd 
//best method 
const gamename = new String('harsh')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


const newString= gamename.substring(0,4)
console.log(newString);

const anotherstring=gamename.slice(1,4)
console.log(anotherstring);

const newStringone= "   harsh   "
console.log(newStringone);
console.log(newStringone.trim());


const url= "https://harsh.com/harsh%20singh19singh"
console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));
