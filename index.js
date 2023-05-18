// let name = 'ngatia';
// let age = '20';
// let student = {
//     name: 'ngatia',
//     age: 20
// };
// student.name = 'Mwai'
// console.log(student);

// let colors = ['red', 'blue', 'green', 'yellow'];
// console.log(colors[2]);

// function getStudent (name, age){
//     console.log('hello'+' '+ name+' '+'you are'+' '+ age +' '+'years old');
// }
// getStudent('Ngatia', 20 );

// function square(number){
//     return number*number;
// }
// let number = 20;
// console.log(square(number));

// //loops
// for(let i=0; i<=20; i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

//else statements
// const x = 0;

// if (x===10){
//     console.log('x is 10');
// }else {
//     console.log('x is not 10');
// }

//else if statements
// const x = 10;

// if (x===10){
//     console.log('x is 10');
// }else if (x>10){
//     console.log('x is greater than 10');
// }else{
//     console.log('x is less than 10');
// }

// const addNums = (num1 , num2) => {
//     console.log(num1+num2);
// }
// addNums(15,5);

function Person(firstName, lastName, dob){
    this.firstName =firstName;
    this.lastName =lastName;
    this.dob =dob;
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}
const person1 = new Person ('Ngatia','Mwai','3-3-2000');
const person2 = new Person ('Sharon','Wanjiku','3-5-1990');
console.log(person1);
console.log(person2);
console.log(person1.getBirthYear());