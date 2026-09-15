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