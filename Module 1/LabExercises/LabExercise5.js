let grade = [90, 80, 70, 60, 50];

let firstGrade = grade.unshift();
let numGrade = grade.length;

console.log("Array");
console.log(grade);
console.log("Array length");
console.log(numGrade);

//Removing Element from the end of an array
let lastGrade  = grade.pop();
console.log("Removing Array last element");
console.log(lastGrade);
console.log(grade);

//Adding element the beginning of the array
console.log("Adding element at the beginning of Array");
grade.unshift(40);
console.log(grade);

//Replacing value at position 1 and 4
console.log("Changing value");
grade[1] = 30;
grade[4] = 20;
console.log(grade);