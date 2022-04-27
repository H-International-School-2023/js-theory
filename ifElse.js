/*
if (condition) {
  // this code runs only if condition is true
}
else {
  // this code runs only if condition is false
}
*/

const student1 = {
  name: 'Paolo',
  surname: 'Cargnin',
  email: 'paolo.cargnin@h-is.com',
  subjects: ['CS', 'Italian A', 'Math AA HL', 'Physics', 'Biology', 'English LIT']
};

const student2 = {
  name: 'Andrea',
  surname: 'Beggiato',
  email: 'andrea.beggiato@h-is.com',
  subjects: ['CS', 'Italian A', 'Math AA HL', 'Physics', 'Biology', 'English LIT']
};

if (student1.subjects.length === 6) {
  console.log(student1.surname + ' has all subjects');
}
else {
  console.log(student1.surname + ' needs ' + (6 - student1.subjects.length) + ' subjects');
}

//           T                    and             T               -> T
if (student1.subjects.length === 6 && student2.subjects.length === 6) {
  console.log('All students have 6 subjects');
}


if (student1.name === 'Paolo') {
  console.log('I know this student. He\'s Paolo');
}
else if (student1.name === 'Riccardo') {
  console.log('I know this student');
}
else {
  console.log('Unknown student!!!!');
}
