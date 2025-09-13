// Variables
var car_brand = "Gwapilecars";
var car_model = "juma";
var car_price = 3555;

// Create an object using the variables
var car = {
    brand: car_brand,
    model: car_model,
    price: car_price,
    autopilot: function () {
        console.log("Autopilot activated for " + this.brand + " " + this.model + ".");
    }
};

// Use the object
console.log(car);               // Display the object
car.autopilot();                // Call the autopilot function
