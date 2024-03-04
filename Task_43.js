/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
the array of magicians’ names. Because the original array will be unchanged, return the new array and store
it in a separate array. Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.*/
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var magician = Magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(Magicians) {
    var great_magician = [];
    for (var i = 0; i < Magicians.length; i++) {
        great_magician.push(Magicians[i] + ' The Great');
    }
    return great_magician;
}
var magician3 = ["muzaffar", "ali", "bilal", "jafar"];
var great_magician2 = make_great(magician3);
show_magicians(magician3);
show_magicians(great_magician2);
