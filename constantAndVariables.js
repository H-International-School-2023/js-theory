/*
Constant and variables
Data types:
  - numbers -> 5
  - strings -> 'string string'
  - arrays -> ['one', 'two', 'three', 'four']
  - objects -> { property: 1, another: 'value' }
  - function
*/

const a = 5;
const b = a;

let aVariable = 10;
aVariable = 5;

const aString = 'a string';

const anArray = [1,2,3,4];
const element = anArray[1];

const obj = {
  firstProperty: 'a string',
  secondProperty: aVariable,
};

obj['secondProperty'];
aVariable = 100;
obj.secondProperty = 100000;