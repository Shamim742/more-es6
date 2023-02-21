const student = {
    name: 'Sakib',
    age: 10,
    class: 'Four',
    marks: {
        math: 78,
        bangla: 80,
        english: 60,
    },
};

const marks = student.marks;
const math = student.marks.math;
const bangla = student['marks']['bangla'];
const subject = 'math';
const subjectMarks = student.marks[subject];
const marks2 = student.marks[subject];
console.log(marks2)
console.log(marks)
console.log(math)
console.log(bangla)
console.log(subjectMarks)