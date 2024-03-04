/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
the array of magicians’ names. Because the original array will be unchanged, return the new array and store 
it in a separate array. Call show_magicians() with each array to show that you have one array of the original
 names and one array with the Great added to each magician’s name.*/

 function show_magicians(Magicians: string[]): void{
    for(const magician of Magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

 function make_great(Magicians: string[]): string[]{
    const great_magician: string[] = []
    for(let i = 0; i < Magicians.length; i++){
        great_magician.push(Magicians[i] + ' The Great');
    }
    return great_magician;
 }

 const magician3: string[] = ["muzaffar","ali","bilal","jafar"];
 const great_magician2: string[] = make_great(magician3);
 show_magicians(magician3);
 show_magicians(great_magician2);