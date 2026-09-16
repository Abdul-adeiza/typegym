NUMBER 1:
const userKeystrokes = [
  { expected: "c", typed: "c" }, // Correct
  { expected: "o", typed: "p" }, // Incorrect
  { expected: "n", typed: "n" }, // Correct
  { expected: "s", typed: "s" }, // Correct
  { expected: "t", typed: "r" }  // Incorrect
];


const correctKeystrokes = userKeystrokes.filter((keystrokes) => keystrokes.expected === keystrokes.typed).reduce((accumulator, keystrokes) => accumulator + keystrokes[i + 1], 0);

console.log(correctKeystrokes);


1. My Prediction:
I think it print out 3

2. Why:
My approach here is to use .filter() and .reduce() method. I observed that the you gave a list of dictionaries which contains label and value pair. In the filter method, I used the "keystrokes.label" method to select the values in the each dictionary for comparison. In the reduce method, I used the keystrokes[i + 1] index value for summation. I assumed (I am not sure) that the index starts at 0 like in python.


CORRECTED VERSION USING GEMINI EXPLANATION:
const correctKeystrokes = userKeystrokes.filter((keystrokes) => keystrokes.expected === keystrokes.typed).length;
console.log(correctKeystrokes);

All arrays in JavaScipt as an in-built .length method use to get the total length of the array.





NUMBER 2:
const serverResponse = {
  user: "Hauwa",
  role: "Admin",
  status: "Active"
};

const { role, status } = serverResponse;

console.log(role);
console.log(status);
console.log(user);


My Prediction:
console.log(role); will print Admin
console.log(status); will print Active
console.log(user); will print undefined.

Why:
role and status where unpacked from the serverResponse object using the {} brackets unlike the user method that wasn't unpacked. Therefore the console.log(user) will print undefined as general scope has no access to the user method.

The above third prediction was wrong. Explanationa and correct perdiction is below.

My Prediction:
console.log(role); will print Admin
console.log(status); will print Active
console.log(user); will crash with a ReferenceError.

Why:
role and status where unpacked from the serverResponse object using the {} brackets unlike the user method that wasn't unpacked. Therefore the console.log(user) will crash with a refence error.

Why ReferenceError:
In JavaScript, undefined means a variable exists in memory but has an empty box (like when you declare a variable but do not assign it a value). A ReferenceError means the box does not exist at all. Because the variable was never created in the local scope (currently general scope), a ReferenceError will be thrown up while the code crashes.


Corrected Code to print all:
const serverResponse = {
  user: "Hauwa",
  role: "Admin",
  status: "Active"
};

const { user, role, status } = serverResponse;

console.log(role);
console.log(status);
console.log(user);





NUMBER 3:
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

My Prediction:
The code will print to the console: "Printing NDPHC visitors badge for Emeka in IT department". It will also print to the console: "Siemens".

Why:
In the code we used "extends" to inherit the methods from the "Visitor" class. We used the "super" keyword to call the parent's or in this case "Visitor" class's constructor. So this "super(name, department)" line in the code is making the "this.#name = name; and this.#department = department" definition of the each constructor available to this class. If we delete the line before instantiating an object for the class, the code will crash.

Why Deleting super() Crashes the ScriptYour intuition that omitting super(name, department) causes a crash is completely accurate. Here is the exact mechanics of why the JavaScript engine fails if that line is removed:In standard class creation, the new keyword instantly creates an empty object and binds it to this. However, when a class extends another class, JavaScript changes the rules:The child class (Contractor) does not create a this object on its own.Instead, it delegates that job to the parent class (Visitor).Calling super() triggers the parent's constructor, which builds the object, sets up its private fields (#name, #department), and initializes this.  If you omit super() or try to write this.#company = company before calling super(), JavaScript will throw a fatal error:ReferenceError: Must call super constructor in derived class before accessing 'this'





NUMBER 4:
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



My Prediction:
1. When contractor1.printBadge() is called, the child Contractor version will run there by printing "Printing CONTRACTOR badge for: IT (Company: Siemens)"

Why:
2. Inside the custom printbadge() method, we called this.getDepartment() instead of this.#department because department is locked in a vault in the visitor class as a constrcutor and the method that we created to give us a copy of the constructor value is this.getDepartment(), which is why we used the getDepartment() method and the "this" will point to itself, whioch points to the parent class that the contractor is inheriting from. 





NUMBER 5:
database.js file

export const dbName = "NDPHC_Core";
export const port = 5432;

export default function connect() {
  return "Database connected.";
}


server.js file

import startEngine, { dbName, DBport } from './database.js';

console.log(startEngine());
console.log(dbName);
console.log(DBport);


My Prediction: 
When you run server,js, javascript will crash with a SyntaxError because the code is trying to import the vairable "port" in to server.js using the name "DBport". This will crash the javasacript. Since the variable being imported is a standard import, the exact name of the variable must be used. 

The correct way to import would be:
import startEngine, { dbName, port } from './database.js';

(Side note: If you ever desperately need to rename a Side Attraction during import to avoid naming conflicts, JavaScript gives you the as keyword: import { port as DBport } from './database.js';)






NUMBER 6:
const userTags = ["admin", "editor", "admin", "viewer", "editor"];

// Pass the array into the VIP Bouncer
const uniqueTags = new Set(userTags);

// Note: Arrays use .length, but Sets and Maps use .size
console.log(uniqueTags.size);


My Prediction:
It will output 3

Why:
You created "set" or a VIP list from the userTags array that contains multiple repeated value. The VIP list simply removes duplicates while creating its own list.





NUMBER 7:
// MAP
const user1 = { name: "Abdulazeez", id: 101 };
const user2 = { name: "Hauwa", id: 102 };

// 1. Create the Advanced Filing Cabinet
const accessLog = new Map();

// 2. We use the ENTIRE object as the file label (key), 
// and a string as the file contents (value).
accessLog.set(user1, "Logged in at 09:00 AM");
accessLog.set(user2, "Logged in at 10:30 AM");


My Prediction:
console.log(accessLog.get(user1)) will print "Logged in at 09:00 AM" as output.

Why:
The code used Map to create a set array that took an object as it key and a string as it value. The '.get' in console.log(accessLog.get(user1)) will get the value 'Logged in at 09:00 AM' of the key 'accessLog.get(user1)' and console.log() will simply output it. This is safer than a standard object because standard objects do not take in an object as an input instead it will quietly convert the object to string literals. Thereby, creating hiddne bugs. 