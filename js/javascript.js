console.log('JavaScript Go !');
//=============================================================
// LET VAR CONST
var V1 = 11;
V1 = 12;
console.log(V1);
let L2 = 23;
L2 = 24;
console.log(L2);
const C3 = 99;
// C3 = 100; // Error
console.log(C3);

//=============================================================
// Arrow Function
function showUserName(uname) {
    console.log(uname)
}
showUserName();
showUserName('Dasarathi Rout')

const showUser = (userName) => {
    console.log(userName);
}
showUser();
showUser('Dasarathi Arrow');

const squre = number => number * number;

console.log(squre(5));

//=============================================================
class Employee {
    constructor() {
        this.country = 'India';
        this.department = 'IT & S';
    }

    showLocationServices() {
        console.log(this.country, this.department)
    }
}

class User extends Employee {
    constructor() {
        super();
        //  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.id = 'EID-';
        this.email = 'user@react.com';
        this.department = 'Finamce Tax';
    }

    showUserDetils() {
        console.log(this.id, this.email);
    }
}
const newUsr = new User();
newUsr.showUserDetils();
newUsr.showLocationServices();
//=============================================================
//ES7 Styles

class Dasarathi {
    name = 'Dasarathi';
    email = 'dasarathi@react.com';

    showDasarathi = () => {
        console.log(this.name, this.email);
    }
}

const me = new Dasarathi();
console.log(me.showDasarathi());
//=============================================================
const numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers);
const newNumbers = [...numbers, 6, 7, 8, 9];
console.log(newNumbers);
//=============================================================
const properties = {
    fname: 'Dasarathi',
    lname: 'Rout'
}

const updateProperties = {
    ...properties,
    email:'dasarathi@react.org',
    mobile: '9976600300'
}

console.log(updateProperties);
//=============================================================
const  filterEven = (... arrays) =>{
    return arrays.filter(
        currentElement => currentElement > 5 
    );
}

console.log(filterEven(0,1,2,3,5,6,7,8,9));
//=============================================================
const arrays = [1,2,3,4];
[X1,X2,X3] = arrays;
console.log(X1,X2,X3,'Sums : ',(X1+X2+X3));
//=============================================================

