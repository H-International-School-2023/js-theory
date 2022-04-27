/*
  while loop

  while (condition) {
    // repeat this code while the condition is True
  }
*/
let n = 0;

while (n !== 22) {
  console.log(n);
  n = n + 2;
}

const student1 = {
  id: 1,
  name: 'Paolo',
  surname: 'Cargnin',
  email: 'paolo.cargnin@h-is.com',
  subjects: ['CS', 'Italian A', 'Math AA HL', 'Physics', 'Biology', 'English LIT']
};

const student2 = {
  id: 2,
  name: 'Andrea',
  surname: 'Beggiato',
  email: 'andrea.beggiato@h-is.com',
  subjects: ['Economics', 'Italian A', 'Math AI', 'Physics', 'Biology', 'English Lang']
};


const student3 = {
  id: 3,
  name: 'Paul',
  surname: 'Iacco',
  email: 'paul.iacco@h-is.com',
  subjects: ['Business', 'Spanish', 'Math AA HL', 'Physics', 'Chemestry', 'English LIT']
};

let biologySelected = false;
let i = 0;
while (i < student1.subjects.length) {
  if (student1.subjects[i] === 'Biology') {
    biologySelected = true;
  }
  i = i + 1;
}

if (biologySelected) {
  console.log('Biology selected');
}
else {
  console.log('Biology not selected');
}

const students = [student1, student2, student3];

i = 0;
while (i < students.length) {
  const student = students[i];
  
  let j = 0;
  while (j < student.subjects.length) {
    if (student.subjects[j] === 'Biology') {
      console.log(student.surname + ' ' + student.name + ' has biology');
    }
    j = j + 1;
  }
  i = i + 1;
}