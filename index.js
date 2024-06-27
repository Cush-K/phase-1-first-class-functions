function receivesAFunction(callBack){
    console.log(`These functions`)
    console.log(callBack());
}
function hardOnes(){
    return `are crazy hard`;
 }
receivesAFunction(hardOnes);



function returnsANamedFunction(){
    return function namedCallback(){
        return `I am a named function`;
     }
 }
  
 returnsANamedFunction();
 
 function returnsAnAnonymousFunction(){
     return function(anonymousMe){
         return `I am anonymous`
     }
 }
 
 returnsAnAnonymousFunction();