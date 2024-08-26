// List of names we want to greet
let names = ["Alice", "Bob", "Charlie"];

// Function that returns a closure
function createGreeting(name) {
    // The returned function is a closure that "remembers" the value of 'name'
    return function () {
        console.log("Hello, " + name + "!");
    };
}

// Loop through the list of names
for (let i = 0; i < names.length; i++) {
    let name = names[i];

    // Create a greeting function that "remembers" the current name
    let greeting = createGreeting(name);

    // Simulate a delayed greeting using setTimeout
    setTimeout(greeting, 1000 * (i + 1)); // Delay increases with each name
}
