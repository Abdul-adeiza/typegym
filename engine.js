const userKeystrokes = [
    { expected: "c", typed: "c"}, // Correct
    { expected: "o", typed: "p"}, // Incorrect
    { expected: "n", typed: "n"}, // Correct
    { expected: "s", typed: "s"}, // Correct
    { expected: "t", typed: "r"} // Incorrect
]

const correctKeystrokes = userKeystrokes.filter((keystroke) => keystroke.expected === keystroke.typed).length;
console.log(correctKeystrokes);


const accuracyPercentage = (correctKeystrokes, userKeystrokes) => (correctKeystrokes/(userKeystrokes.length)) * 100;
console.log("The Accuracy Percentage is " + accuracyPercentage(correctKeystrokes, userKeystrokes) + "%");

const userSession = {
  username: "Bello",
  token: undefined,
  logout: () => console.log("Logging out...")
};

const flatPack = JSON.stringify(userSession);
console.log(flatPack);


const totalKeystrokes = 250;
const timeInMinutes = 1.5;

const calculateWPM = (totalKeystrokes, timeInMinutes) => (totalKeystrokes / 5) / timeInMinutes;
console.log("The Words per Minutes is " + Math.round(calculateWPM(totalKeystrokes, timeInMinutes)));




// PROTOTYPES AND THE PROTOTYPE CHAIN.
const genericEmployee = {
    clearance: "Level 1",
    department: "General"
};

// Object.create() builds a brand new empty object, 
// but ties its hidden string (__proto__) to the object you pass inside the parentheses.
const engineer = Object.create(genericEmployee);
engineer.name = "Abdulazeez";
engineer.department = "Information Technology";

console.log(engineer.name);
console.log(engineer.clearance);
console.log(engineer.department);



// CLASSESS
class Visitor {
  #name;
  #department;
  constructor(name, department) {
    this.#name = name;
    this.#department = department;
  }
  
  printBadge() {
    console.log("Printing NDPHC visitor badge for: " + this.#name + " in " + this.#department);
  }

  getDepartment() {
    return this.#department;
  }

  setDepartment(newDepartment) {
    if (typeof newDepartment === "string") {
      this.#department = newDepartment;
    }
    else {
      console.log("Invalid department")
    }
    
  }

}

const visitor1 = new Visitor("Hauwa", "Commercial");

visitor1.printBadge();

console.log(visitor1.getDepartment());

visitor1.setDepartment("Information Technology");

console.log(visitor1.getDepartment());

visitor1.setDepartment(999);




// INHERITANCE - EXTENDS AND SUPER
class Contractor extends Visitor {
  #company;

  constructor(name, department, company) {
    // The 'super' keyword calls the parent class's constructor
    super(name, department); 
    this.#company = company;
  }

  getCompany() {
    return this.#company;
  }
}

const techWorker = new Contractor("Emeka", "IT", "Siemens");
techWorker.printBadge(); // Inherited from Visitor!
console.log(techWorker.getCompany()); // Specific to Contractor




// METHOD OVERRIDING (POLYMORPHISM)
class Contractor extends Visitor {
  #company;

  constructor(name, department, company) {
    super(name, department);
    this.#company = company;
  }

  // Overriding the printBadge method inherited from Visitor
  printBadge() {
    console.log("Printing CONTRACTOR badge for: " + this.getDepartment() + " (Company: " + this.#company + ")");
  }
}

const contractor1 = new Contractor("Emeka", "IT", "Siemens");
contractor1.printBadge();




// MODULES
// A seperate file
export const maxVisitors = 50;

export function checkClearance() {
  return "Clearance granted.";
}

export default class VisitorV {
  constructor(name) {
    this.name = name;
  }
}


// A seperate file
import VisitorV, { maxVisitors, checkClearance } from './securityTools.js';

const guest = new Visitor("Hauwa");
console.log(guest.name);
console.log(maxVisitors);
console.log(checkClearance());