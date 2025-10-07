// array manipulation and methods
let studentNames = ["Jānis", "Anna", "Pēteris", "Līga", "Mārtiņš", "Jānis", "Zane", "Anna", "Līga", "Līga"];
console.log("1.1 Course applicants loaded");

studentNames.unshift("Fernando");
studentNames.push("Alise");
console.log("1.2 Late registrations processed");

const withdrawnStudent = studentNames.splice(9,1);
console.log(`1.3 Withdrawal processed: ${withdrawnStudent}`);

const topStudents = studentNames.slice(0,3);
console.log("1.4 Priority students identified");

studentNames.sort((a, b) => a.localeCompare(b, "lv"));
console.log("1.5 Final roster alphabetized");

// iterating over arrays
for (let i = 0; i < studentNames.length; i++) {
  console.log(`${i} ${studentNames[i]}`);
}

topStudents.forEach((student) => {
    console.log(`Top Student: ${student}`);
});

let studentNameLengths = studentNames.map((name) => name.length);
console.log("2.3 Name lengths computed:");
console.log(studentNameLengths);

// working with objects
function Course(courseName, instructor, studentNames) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.students = studentNames;
    this.internalStudentPool = ["Ava", "Noah", "Mila", "Liam"];
    this.assignments = [];

    this.addSeed = () => {
        let newSeed = prompt("Enter a student name to seed the roster (optional):");
        newSeed = newSeed ? newSeed.trim() : "";
        if (!newSeed || newSeed.length === 0) {
            return this.internalStudentPool[Math.floor(Math.random() * this.internalStudentPool.length)];
        } else{
            return newSeed;
        }
    }
    
    this.students.push(this.addSeed());
    console.log("3.1 Course object ready");

    this.addStudent = () => {
        let newStudent = prompt("Enter a student name to add:");
        newStudent = newStudent ? newStudent.trim() : "";
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
        let studentToRemove = prompt(`Enter a student name to remove (options: ${this.students.join(", ")}):`);
        studentToRemove = studentToRemove ? studentToRemove.trim() : "";
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

    this.addAssignment = (assignment) => {
        const isValidTitle = assignment && typeof assignment.title === "string" && assignment.title.trim().length > 0;
        const isValidDue = assignment && typeof assignment.dueDate === "string" && assignment.dueDate.trim().length > 0;
        const isValidMax = assignment && typeof assignment.maxScore === "number" && Number.isFinite(assignment.maxScore);
        if (!isValidTitle || !isValidDue || !isValidMax) return;
        this.assignments.push({ title: assignment.title.trim(), dueDate: assignment.dueDate.trim(), maxScore: assignment.maxScore });
        console.log(`4.2 Added assignment: ${assignment.title.trim()}`);
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
programming.addAssignment({ title: "Final Project", dueDate: "January 20, 2026, 11:59 PM", maxScore: 200 });
programming.listAssignments();

Object.defineProperty(Array.prototype, "median", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function () {
        if (this.length === 0) return null;
        if (!this.every(v => typeof v === "number" && Number.isFinite(v))) return null;
        const sorted = [...this].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 1
            ? sorted[mid]
            : (sorted[mid - 1] + sorted[mid]) / 2;
    }
});