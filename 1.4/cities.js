// Write a function called cities() that accepts two parameters 'city' which is the name of the city
// and 'country' the country it is in. 
// The function should log a message to the console, naming the city and where it is located.
// "Reykjavik is in Iceland."
// If no parameters are entered it should show the correct message for 'London'

// Your code here...
function cities(city = "London", country = "England"){
    console.log(city + " is in " + country + ".");
}


module.exports = exports = cities;