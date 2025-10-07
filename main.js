// array manipulation and methods
let studentNames = ["Jānis", "Anna", "Pēteris", "Līga", "Mārtiņš", "Jānis", "Zane", "Anna", "Līga", "Līga"];
console.log("1.1 Course applicants loaded");

studentNames.unshift("Fernando");
studentNames.push("Alise");
console.log("1.2 Late registrations processed");

let withdrawnStudent = studentNames.splice(9,1);
console.log(`1.3 Withdrawal processed: ${withdrawnStudent[0]}`);

let topStudents = studentNames.slice(0,3);
console.log("1.4 Priority students identified");

studentNames.sort((a, b) => a.localeCompare(b, "lv"));
console.log("1.5 Final roster alphabetized");

// iterating over arrays
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} ${studentNames[i]}`);
}

for (student in topStudents){
    console.log(`Top Student: ${topStudents[student]}`);
}

let studentNameLengths = [];
studentNames.forEach(name => studentNameLengths.push(name.length));
console.log("2.3 Name lengths computed:");
console.log(`${studentNameLengths}`);

// working with objects
function Course(courseName, instructor, studentNames) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.students = studentNames;
    this.internalStudentPool = ["Ava", "Noah", "Mila", "Liam"];
    this.assignments = [];

    this.addSeed = () => {
        let newSeed = prompt("Enter a student name to seed the roster (optional):").trim();
        if (!newSeed) {
            return this.internalStudentPool[Math.floor(Math.random() * this.internalStudentPool.length)];
        } else{
            return newSeed;
        }
    }
    
    this.students.push(this.addSeed());
    console.log("3.1 Course object ready");

    this.addStudent = () => {
        let newStudent = prompt("Enter a student name to add:").trim();
        if (newStudent) {
            this.students.push(newStudent);
            console.log(`3.2 Added student: ${newStudent}`);
        } else {
            if (this.students.length === 0) {
                return;
            }
            let deletedStudent = this.students.pop();
            console.log(`3.2 Removed last student: ${deletedStudent}`);
        }
    }

    this.removeStudent = () => {
        let studentToRemove = prompt(`Enter a student name to remove (options: ${this.students.join(", ")}):`).trim();
        if (!studentToRemove) {
            return false;
        }
        if (this.students.includes(studentToRemove)) {
            this.students.splice(this.students.indexOf(studentToRemove), 1);
            console.log(`3.3 Removed student: ${studentToRemove}`);
            return true;
        } else {
            console.log(`3.3 Student not found: ${studentToRemove}`);
            return false;
        }
    }

    this.listStudents = () => {
        this.students.forEach((student) => {
            console.log(`Student: ${student}`);
        });
    }

    this.addAssignment = (title, dueDate, maxScore) => {
        this.assignments.push({ title, dueDate, maxScore });
        console.log(`3.4 Added assignment: ${title}`);
    }

    this.listAssignments = () => {
        this.assignments.forEach((assignment) => {
            console.log(`Assignment: ${assignment.title} - Due: ${assignment.dueDate}`);
        });
    }
}

let programming = new Course("Introduction to Programming", "O. Balins", studentNames);
programming.addStudent();
programming.removeStudent();
programming.listStudents();


// combining arrays, iterations and objects
programming.assignments = [
    { title: "Assignment 1", dueDate: "October 15, 2025, 11:59 PM", maxScore: 100 },
    { title: "Assignment 2", dueDate: "November 15, 2025, 11:59 PM", maxScore: 100 },
    { title: "Assignment 3", dueDate: "December 30, 2025, 11:59 PM", maxScore: 100 }
];
console.log("4.1 Assignments initialized");
programming.addAssignment("Final Project", "January 20, 2026, 11:59 PM", 200);
programming.listAssignments();

Array.prototype.median = function() {
    if (this.length === 0) return null;
    if (this.some(isNaN)) return null;
};