// array manipulation and methods
let studentNames = ["Jānis", "Anna", "Pēteris", "Līga", "Mārtiņš", "Jānis", "Zane", "Anna", "Līga", "Līga"];
console.log("1.1 Course applicants loaded");

studentNames.unshift("Fernando");
studentNames.push("Alise");
console.log("1.2 Late registrations processed");

let withdrawnStudents = [studentNames.splice(9,1)];
console.log(`1.3 Withdrawal processed: ${withdrawnStudents}`);

let topStudents = studentNames.slice(0,3);
console.log("1.4 Priority students identified");

studentNames.sort();
console.log("1.5 Final roster alphabetized");

// iterating over arrays
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i + 1}. ${studentNames[i]}`);
}

for (student in topStudents){
    console.log(`Top student: ${topStudents[student]}`);
}

let studentNameLengths = [];
studentNames.forEach(name => studentNameLengths.push(name.length));
console.log(`2.3 Name lengths computed: ${studentNameLengths}`);

