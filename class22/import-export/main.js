// main.js
import { MyClass,MyClass2 } from './example.js';
import { A } from './example2.js';

const myObject = new MyClass('John');
document.getElementById('greet').innerHTML = myObject.sayHello();
const mc2 = new MyClass2();
const aa = new A();
console.log(typeof mc2);
