//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
//invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.

//part 1
let guestArr: string [] = ["Hamza","Bilal","Muzaffar","Ali","Zaid"];
let canNotAttend: string = "Muzaffar";

let newGuest : string = "Ahmed";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;

console.log(guestArr);

// guestArr.map((items) => (console.log(`Dear ${items}, I found a bigger dinner table so i am invited more peoples,`)));

//part 2 Begin
let guestBeg: string = "Moiz";
guestArr.unshift(guestBeg);
console.log(guestArr);

//part 3 Middle
let middleGuest: string = "Jawad";
let middleIndex:number = Math.floor(guestArr.length/2);
guestArr.splice(middleIndex ,0,middleGuest);
console.log(guestArr);

//part 4 Append

guestArr.push("Wajid");
console.log(guestArr);

//part 5 

guestArr.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)));