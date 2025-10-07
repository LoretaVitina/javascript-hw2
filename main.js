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

// working with objects
function course(courseName, instructor) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.students = studentNames;
    this.internalStudentPool = ["Ava", "Noah", "Mila", "Liam"];
    this.students.push(addSeed());

    function addSeed() {
        newSeed = prompt("Enter a student name to seed the roster (optional):").trim();
        if (!newSeed) {
            return this.internalStudentPool[Math.floor(Math.random() * this.internalStudentPool.length)];
        } else{
            return newSeed;
        }
    }

    function addStudent(){
        newStudent = prompt("Enter a student name to add:").trim();
        if (newStudent) {
            this.students.push(newStudent);
            console.log(`3.2 Added student: ${newStudent}`);
        } else {
            deletedStudent = this.students.pop();
            console.log(`3.2 Removed last student: ${deletedStudent}`);
        }
    }

    function removeStudent(){
        let studentToRemove = prompt(`Enter a student name to remove (options: ${this.students.join(", ")}):`).trim();
        if (studentToRemove in this.students) {
            this.students.splice(this.students.indexOf(studentToRemove), 1);
            console.log(`3.3 Removed student: ${studentToRemove}`);
            return true;
        } else {
            console.log(`3.3 Student not found: ${studentToRemove}`);
            return false;
        }
    }

    function listStudents(){
        this.students.forEach((student) => {
            console.log(`Student: ${student}`);
        });
    }
}
course.addStudent();
course.removeStudent();
course.listStudents();