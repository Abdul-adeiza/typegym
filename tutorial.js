// CLOSURES
function createSecurityBadge(employeeName) {
  let accessLevel = "Standard";

  return function(zone) {
    console.log(employeeName + " is entering " + zone + " with " + accessLevel + " access.");
  };
}

const myBadge = createSecurityBadge("Abdulazeez");
myBadge("Server Room");






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




// MODULES - EXPORT & IMPORT
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





//database.js file

export const dbName = "NDPHC_Core";
export const port = 5432;

export default function connect() {
  return "Database connected.";
}


//server.js file

import startEngine, { dbName, DBport } from './database.js';

console.log(startEngine());
console.log(dbName);
console.log(DBport);





// MAP & SET

//SET
const userTags = ["admin", "editor", "admin", "viewer", "editor"];

// Pass the array into the VIP Bouncer
const uniqueTags = new Set(userTags);

// Note: Arrays use .length, but Sets and Maps use .size
console.log(uniqueTags.size);


// MAP
const user1 = { name: "Abdulazeez", id: 101 };
const user2 = { name: "Hauwa", id: 102 };

// 1. Create the Advanced Filing Cabinet
const accessLog = new Map();

// 2. We use the ENTIRE object as the file label (key), 
// and a string as the file contents (value).
accessLog.set(user1, "Logged in at 09:00 AM");
accessLog.set(user2, "Logged in at 10:30 AM");

console.log(accessLog.get(user1));







//FUNCTION SYNTAX STYLES (STANDALONE)

//Standard function Outside an Object
function calculate(a, b) { 
  return a + b; 
}

//Arrow function (Multi-line) outside an Object
const calculate = (a, b) => { 
  return a + b; 
};

//Arrow function (One-line / Implicit Return)
const calculates = (a, b) => a + b;

//Inside an Object (Methods)

//Standard Method (ES6 Shorthand - Recommended)
const user = { 
  calculate(a, b) { 
    return a + b; 
  }
};

//Standard Method (Classic)
const users = { 
  calculate: function(a, b) { 
    return a + b; 
  } 
};


//Arrow Method (Warning - loses this)
const userr = { 
  calculate: (a, b) => a + b 
};


//Inside a Class (Methods)
class Engine { 
  calculate(a, b) { 
    return a + b; 
  } 
}
