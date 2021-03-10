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
 * TYPE INFERENCE
 */
let myName = "SRB"
let myAge = 23
let isAwevdeveloper = true

let data: (string | number | boolean)[] = [5, 'programmer']
data.push(true)

let anything: { name: string, age: number } = JSON.parse(' "name": "SRB", "age":23 ')

function something(note: string): any {
    return {
        extra: note
    }
}
let extraResult: { extra: string } = something("I AM QUICKE LEARNER")