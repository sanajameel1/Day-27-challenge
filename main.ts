// QUESTiON 79

// This sets up an object for a car with specific details
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// // Accessing and showing the car's model
// console.log(car.model); // Outputs: Corolla
// // We use dot notation (car.model) to get the model of the car from our object.


// QUESTION 80

// interface car {
//     make: string;
//     model: string;
//     year: number;
//     color?: string;
// }

// let car: car = {
//     make: 'ford',
//     model: 'mustang',
//     year: 2022

// };

// car.color = "white";
// car.year = 2023;

// console.log(car);


// QUESTION 81

// This function shows every detail about an object
function logObjectProperties(obj: object) {
    for (let property in obj) {
        // Loops through each property in the object
        console.log('${property}: ${obj[property]}');
        // Shows the property name and its value
    }
}

// Using the function with a car object
logObjectProperties({ make: "ford", model: "mustage", year: 2021, color: "white" });
// It tells us each piece of information stored about the car.

