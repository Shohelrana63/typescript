// let msg = "hello programmer"
// console.log(msg);
/*--NUMBER--*/
function add(a: number, b: number) {
    return a + b;
}
console.log(add(11, 11));
console.log(add(11, 1.5));

/*----- NUMBER STRING BOOLEAN ANY UNKNOWN NEVER FUNCTION -----*/
function addAge(obj: Student): Student {
    obj.age += 1;
    return obj;
}
interface Student {
    name: string;
    age: number;
    achievements: string[];
    isGoodStudent: boolean;
    result: any;
}
function addAchievements(data: Student, acv: string): void {
    //void means not return anything
    data.achievements.push(acv);
    console.log(data);
}
function addExtra(value: unknown): void {
    student.result = value;
    console.log(student.result)
}
const student: Student = {
    name: "baig",
    age: 23,
    achievements: ['coder', 'programmer'],
    isGoodStudent: true,
    result: ""
}
const value = addAge(student);
value.name = "BAIG DIGITAL"
console.log(value);
addExtra({
    extra: "i m programmer"
})

/*******************************
 * /****
 ***
 **
 *-- TYPE INFERENCE --*
 **
 ***
****/

let myName = "SRB"
let myAge = 23
let isAwevdeveloper = true

let data: (string | number | boolean)[] = [5, 'programmer']
data.push(true)

// let anything: { name: string, age: number } = JSON.parse(' "name": "SRB", "age":23 ')

function something(note: string): any {
    return {
        extra: note
    }
}
let extraResult: { extra: string } = something("I AM QUICKE LEARNER")


/****
 ***
 **
 *-- TYPE CONVERSION --*
 **
 ***
****/

let number1 = '1'
let number2 = '2'
// let result = number1 + number2
let result = Number(number1) + Number(number2)
console.log(result);

///----- example: 01 ------\\\
interface Stuff {
    name: string,
    age: number
}
interface Employee {
    name: string,
    age: number,
    strikeRate: number,
    average: number
}
const employee: Employee = {
    name: 'baig',
    age: 23,
    strikeRate: 90,
    average: 50
}
function show(something: Stuff): void {
    console.log(`name: ${something.name}\nage : ${something.age}`);
}
show(employee)
///----- example: 02 ------\\\
// String Convert \\
let a: unknown = "baig digital"
let len = (a as string).length // (<string>a).length same as (a as string).length
console.log(len);


/****
 ***
 **
 *-- FUNCTION --*
 **
 ***
****/
interface srbaig {
    name: string,
    age?: number,
    members?: string[],
}

type baigType = (first: string, second: string, third?: number, ...extra: string[]) => srbaig

const baig: baigType = function (intro: string, title: string, age = 0, ...members) {
    return {
        name: intro + ' ' + title,
        age: age,
        members: members
    }
}
const results = baig('we are', 'baig digital ', 10, "baig1", 'baig2')
console.log(results);