
//Github Repo url: gemlibra.github.io/js_module4_solutions


(function() {
    var nameArray = [{
    name: 'John', 
    name: 'James', 
    name: 'Jennifer', 
    name: 'Gift',
    name: 'Xtian',
    name: 'jasmine',
    name: 'Zarah',
    name: 'Clara',
    name: 'jaspin'
    }];

    const myResult = document.querySelector("#results");
    
    for ( i = 0; i < nameArray.length;  i++) {
        
        var firstLetter = nameArray[i].charAt(0).toLowerCase();

        if (firstLetter === 'J' || 'j') {
       var names = console.log(`Hello  + ${nameArray.name[i]}`);
       myResult.innerHTML = names;
    
        } else {
        console.log(`Goodbye  + ${arrayName.name[i]}`);
        myResult.innerHTML = names;
     };
  };
})();