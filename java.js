function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// JavaScript file (java.js)
const car1 = {
    make: "Honda",
    model: "Civic",
    trim: "Type R",
	year: 2001,
    bhp: 197,
    carName: function(){
        return this.make + " " + this.model + " " + this.trim;
    }, 
    carInfo: function(){
        return "Make: " + this.make + "<br>" + "Model: " + this.model + "<br>" + "Trim: " + this.trim + "<br>" + "Year: " + this.year;
    },
    displayCar: function() {
        document.getElementById("carInfo1").innerHTML = this.carInfo(); // Update car info for car 1
    },
    carNameText: function(){
        document.getElementById("carNameText1").innerHTML = this.carName(); // Update car name for car 1
    },
};

const car2 = {
    make: "Seat",
    model: "Leon",
    trim: "Cupra R",
	year: 2002,
    bhp: 225,
    carName: function(){
        return this.make + " " + this.model + " " + this.trim;
    }, 
    carInfo: function(){
        return "Make: " + this.make + "<br>" + "Model: " + this.model + "<br>" + "Trim: " + this.trim + "<br>" + "Year: " + this.year;
    },
    displayCar: function() {
        document.getElementById("carInfo2").innerHTML = this.carInfo(); // Update car info for car 2
    },
    carNameText: function(){
        document.getElementById("carNameText2").innerHTML = this.carName(); // Update car name for car 2
    },
};

const car3 = {
    make: "Audi",
    model: "A3",
    trim: "TDI",
	year: 2010,
    bhp: 170,
    carName: function(){
        return this.make + " " + this.model + " " + this.trim;
    }, 
    carInfo: function(){
        return "Make: " + this.make + "<br>" + "Model: " + this.model + "<br>" + "Trim: " + this.trim + "<br>" + "Year: " + this.year;
    },
    displayCar: function() {
        document.getElementById("carInfo3").innerHTML = this.carInfo(); // Update car info for car 2
    },
    carNameText: function(){
        document.getElementById("carNameText3").innerHTML = this.carName(); // Update car name for car 2
    },
};

// Call the carNameText() function when the page loads
window.onload = function() {
    car1.carNameText(); // Set car name for car 1
    car2.carNameText(); // Set car name for car 2
	car3.carNameText(); // Set car name for car 2
};
