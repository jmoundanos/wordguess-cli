var Letter = function(){
    var hiddenLetter = "";
    var letterGuess = false;
    var placeholder = function(){
        if(letterGuess === true){
            return hiddenLetter;
        }else{
            return "_";
        }
    }
    var checkChar  = function(char){
        if(hiddenLetter === char){
            letterGuess = true;
        }
    }
}