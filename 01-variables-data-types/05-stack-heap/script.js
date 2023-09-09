// These values are stored on the stack
const name = 'john';
const age = 30

// Reference vaules are stored on the heap
const person = {
    name: 'Brad',
    age: 40
}

let newName = name;
newName = 'Johnathan'

let newPerson = person;
newPerson.name = 'Bradly'

console.log(newPerson, person)