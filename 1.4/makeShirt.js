// ** PART 1 **
// Write a function called makeShirt() that accepts two parameters 'size' and 
//'text' of a message that should be printed on the shirt.
// The function should log a message to the console, to summarise the size and text printed on it.
// "The shirt you have ordered is 'L' and has the message 'Multiverse' printed on it."

// ** Part 2 **
// Modify the makeShirt() function so that shirts are large by default with a message that reads
// 'I love Javascript'.

// Your code here...

function makeShirt(size = "L", text = "I love Javascript"){
    console.log("The shirt you have ordered is '" + size + "' and has the message '" + text + "' printed on it.");
}



module.exports = exports = makeShirt;