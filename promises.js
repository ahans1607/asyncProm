function stringOne() {
    return "One";
};

async function stringTwo() {
    return "Two";
};

console.log("stringOne", stringOne());
console.log("stringTwo", stringTwo());


stringTwo().then(res => console.log("After .then", res))
