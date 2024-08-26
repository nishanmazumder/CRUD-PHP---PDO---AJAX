// Simulate an asynchronous function that retrieves items from an array
function getItemsAsync(number, callback) {
    setTimeout(() => {
        // Simulate retrieving array items related to the number
        let items = [number, number, number]; // Pretend we found 3 items for the given number
        callback(items); // Pass the items to the callback
    }, 1000);
}

// Function that returns a closure
function createCallbackWithNumber(number) {
    // The returned function is a closure that "remembers" the value of 'number'
    return function (items) {
        console.log(`Number: ${number}, Items: ${items.length}`);
    };
}

// Array of numbers we want to process
let numbersToProcess = [1, 2, 3];

// Iterate through the array
for (let i = 0; i < numbersToProcess.length; i++) {
    let number = numbersToProcess[i];

    // Create a callback that "remembers" the current number
    let callback = createCallbackWithNumber(number);

    // Simulate an asynchronous call with the callback
    getItemsAsync(number, callback);
}
