/*
Constant and variables
Data types:
  - numbers -> 5
  - strings -> 'string string'
  - bool -> true/false
  - arrays -> ['one', 'two', 'three', 'four']
  - objects -> { property: 1, another: 'value' }
  - function
*/

const a = 5;
const b = a;
const booleanConstant = true;

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



const personName = 'Andrea';
const personSurname = 'Beggiato';
const personEmail = 'andrea.beggiato@h-is.com';
const personSubjects = ['CS', 'Italian A', 'Math AA HL', 'Physics', 'Biology', 'English LIT'];

const person1 = {
  name: 'Andrea',
  surname: 'Beggiato',
  email: 'andrea.beggiato@h-is.com',
  subjects: ['CS', 'Italian A', 'Math AA HL', 'Physics', 'Biology', 'English LIT']
};


const person2 = {
  name: 'Paolo',
  surname: 'Cragnin',
  email: 'paolo.cargnin@h-is.com',
  subjects: ['CS', 'Italian A', 'Math AA HL', 'Physics', 'Biology', 'English LIT']
};

const person1FullName = person1.name + ' ' + person1.surname;
console.log(person1FullName);

const result = '9' + '5';

/*
Operators:
  = -> assignment
  + -> plus for numbers and concatenation for strings
  - -> minus between numbers
  * -> multiplication between numbers
  / -> division between numbers
  % -> modulus between integers!

  > -> greather then [on numbers]
  < -> less then [on numbers]
  >= -> greather then or equal to [on numbers]
  <= -> less then or equal to [on numbers]

  === -> EQUAL
  !== -> NOT EQUAL 
  && -> AND between boolean
  || -> OR between boolean
  ! -> NOT only with one boolean
*/