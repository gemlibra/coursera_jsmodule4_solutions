
//Github Repo url: gemlibra.github.io/js_module4_solutions


 var result = document.getElementById("output");

(function () { //This module executes both JS Closure and IIFE (Immediatly invoked function expressions)

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
function helloSpeaker () {
  console.log(`Hello  ${names[i]}`);
  result.innerHTML = ` Hello  ${names}`;
};

function byeSpeaker () {
  console.log(`Good bye  ${names[i]}`);
  result.innerHTML = `Good bye  ${names[i]}`;
}
  
  for ( var i = 0; i < names.length; i++) {
    
    var firstLetter = names[i].charAt(0); //.toLowerCase();
    
     if (firstLetter !== 'J' ) {
        helloSpeaker();
    } else {
        byeSpeaker();
     };
  };
  
})();

