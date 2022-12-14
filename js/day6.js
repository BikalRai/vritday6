const person = {
    person1: "Bikal",
    person2: "Sally",
};

if (person.person1 !== "Bikal") {
    console.log(`I am ${person.person1}`);
    // console.log("I am " + person.person1);
    // console.log("i am", person.person1);
} else {
    console.log(`I am ${person.person2}`);
}

const personTwo = {
    name: "Timmy",
    age: 19,
};

if (personTwo.age > 20) {
    console.log(`I am ${personTwo.name}`);
}

if (personTwo.name === "Timmy" && personTwo.age >= 20) {
    console.log(`I am ${personTwo.name} and i am ${personTwo.age} years old!`);
} else if (personTwo.name === "Timmy" && personTwo.age < 20) {
    console.log("Failed to execute!");
}

if (personTwo.name === "Timmy" || personTwo.age > 20) {
    console.log(`Yes i am ${personTwo.name} or ${personTwo.age} years old!`);
}
