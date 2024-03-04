//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
//stores several examples. Use your list to print a series of statements about these items, such as “I would like
//to own a Honda motorcycle.”
var transportation = ["Honda Civic", "Honda Vezel", "Toyota Corolla Altis", "Toyota Fortuner", "Toyota Vitz"];
transportation.map(function (items) { return (console.log("I Would Like to own a ".concat(items))); });
