(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

 
  for (name in names) {
    if (names[name].charAt(0).toLowerCase() == 'j') {
      console.log("Good Bye" + names[name]);
    } else {
      console.log("Hello " + names[name]);
    }
  }
})();