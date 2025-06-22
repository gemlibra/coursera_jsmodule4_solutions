
//Github Repo url: gemlibra.github.io/js_module4_solutions

(function () { //This module executes both JS Closure and IIFE (Immediatly invoked function expressions)

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


function helloSpeaker () {
    var hellomsg = console.log( `Hello + ${names[i]}`);
}

function byeSpeaker () {
    var byemsg = console.log( `Goodbye + ${names[i]}`);
}

for (var i = 0; i < names.length; i++) {
    
    var firstLetter = names[i].charAt(0).toLowerCase();
 
     if (firstLetter === 'J' || 'j') {
        helloSpeaker.hellomsg;
  } else {
        byeSpeaker.byemsgmsg;
  }
}

})();
