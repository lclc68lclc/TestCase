var game = {
    characters: ["walter white", "steve urkel", "homer simpson"],
    status: "Awesome",
    blankGuess: function (){
       for(var i=0; i < game.characters.length; i++){
           this.character = game.characters[i];
           var count = this.character.length;
           var blanks = "_ ";
           var toGuess = blanks.repeat(count);
           console.log(toGuess);
           console.log(this.character);
           }
           //console.log(blanks);
       },
    wordGuess: document.keyup = function(){
    }
    
}

//game.wordGuess();

