/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
 show_magicians() to see that the list has actually been modified.*/

 function show_magicians(Magicians: string[]): void{
    for(const magician of Magicians){
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

 function make_great(Magicians: string[]): void{
    for(let i = 0; i < Magicians.length; i++){
        Magicians[i] = Magicians[i] + ' The Great';
    }
 }

 const magician2: string[] = ["muzaffar","ali","bilal","jafar"];
 make_great(magician2);
 show_magicians(magician2)
 