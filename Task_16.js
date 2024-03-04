//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
//invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
//part 1
var guestArr = ["Hamza", "Bilal", "Muzaffar", "Ali", "Zaid"];
var canNotAttend = "Muzaffar";
var newGuest = "Ahmed";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((items) => (console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples,`)));
//part 2 Begin
var guestBeg = "Moiz";
guestArr.unshift(guestBeg);
console.log(guestArr);
//part 3 Middle
var middleGuest = "Jawad";
var middleIndex = Math.floor(guestArr.length / 2);
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//part 4 Append
guestArr.push("Wajid");
console.log(guestArr);
//part 5 
guestArr.map(function (items) { return (console.log("Dear ".concat(items, ", You are invited to the dinner"))); });
