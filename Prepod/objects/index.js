
// const person = [34, 'Gomel', 51];

// const person = {
//     name: 'John',
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         width: 23,
//         height: 200,
//         weight: 100,
//     },
// };


var str = ['city', 'smity', 'pitty'];

const person = {
    name: 'Valerchik',
    [str[2]]: 'Gomel',
};

const { 'pitty': asda } = person;


console.log(asda);

// let nick = 'Bobik';

// const dog = {
//     age: 23,
//     nick, // nick: nick
//     city: 'Gomel'
// };



// const person2 = {
//     ...person,
//     stack: [ ...person.stack ],
//     size: { ...person.size }
// };


// const person3 = {
//     pogremuha: 'lobzik',
//     hodki: 6
// }

// const person2 = {
//     ...person3,
//     ...person,
//     a: 2
// };

// console.log(person2)


// ===
// for (let key in person) {
//     person2[key] = person[key];
// }


// person.name = 'LLLLLLL';

// console.log(person2);

// rest spread desctructuring
// const arr = [5,4,33,65,6];
// const [a,b] = arr;

// const age = 2;

// const { 
//     age: johnAge = 100,
//     city,
//     lastName = 'Ivanov',
//     size: {
//         height
//     } = {height: 999}
// } = person;

// const {
//     age,
//     name,
//     stack: [a, b = 'BLABLA', ...kusokStacka],
//     ...kusokPersona
// } = person;



// const age = person.age;






// const person2 = {};

// for ( let key in person ) {
//     if (Array.isArray(person[key])) {
//         person2[key] = [...person[key]];
//         continue;
//     }

//     person2[key] = person[key];
// }

// person.stack.push('React');
// person.size.width = 30;

// console.log(person2.size === person.size)

// person.name = 'Valerchik';

// console.log(person2);


// person.name = 'Valerchik';
// person.lastName = 'Ivanov';

// console.log( 'isProgrammer' in person );
// console.log( person.hasOwnProperty('isProgrammer') );

// delete person.age;


