//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
//try more comparisons, write more tests. Have at least one True and one False result for each of the 
//following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

let name_1: string = "Muzaffar"
let name_2: string = "Muzaffar Ahmed"
let name_3: string = "Muzaffar Ahmed Pirzada"

if(name_1 == name_2){
    console.log("Names are equal");
}else{
    console.log("Names are not equal")
}

if(name_1 != name_2){
    console.log("Names are equal");
}else{
    console.log("Names are not equal");
}

if(name_1 != name_3){
    console.log("Names are equal");
}else{
    console.log("Names are not equal");
}

let Age_1: number = 18;
let Age_2: number = 32;

if(Age_1 == 18){
    console.log("Eligible for Driving");
}else{
    console.log("Not Eligible for Driving");
}

if(Age_1 <= Age_2){
    console.log("Younger");
}

if(Age_2 >= Age_1){
    console.log("Older");
}

if(Age_1 == 18 && Age_2 == 32){
    console.log("You are Eligible for driving");
}

if(Age_1 == 18 && Age_2 == 52){
    console.log("You are Eligible for driving");
}else{
    console.log("You are not Eligible for driving");
}

if(Age_1 == 18 || Age_2 == 52){
    console.log("You are Eligible for driving");
}else{
    console.log("You are not Eligible for driving");
}


let country_list: string [] = ["Pakistan","China","England","Bangladesh","Afghanistan"];
if(country_list.includes("China")){
    console.log("China is in country list");
}

if(!country_list.includes("China")){
    console.log("China is not in country list");
}else{
    console.log("China is in country list");
}

