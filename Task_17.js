//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
//only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program.
var GuestList = ["Ali", "Hunain", "Shadab", "Hassan", "Wasim"];
//Informing that only two people can be invited
// console.log("Due to limited space, only two people can be invited for dinner.")
//not invited for dinner
while (GuestList.length > 2) {
    var removeGuest = GuestList.pop();
    console.log("Sorry, ".concat(removeGuest, " You are not longer invited to dinner. "));
}
//invited for dinner
GuestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are invited to dinner."));
});
//removing last two people
var GuestList1 = ["Ali", "Hunain", "Shadab", "Hassan", "Wasim"];
GuestList1.pop();
GuestList1.pop();
console.log("Final Guest list", GuestList1);
