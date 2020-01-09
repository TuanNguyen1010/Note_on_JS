function NoteController(){
};

NoteController.prototype = (function() {
  function grabId() {
    var element = document.getElementById("app");
    return element.innerHTML
  }


  function howdy() {
    var element = document.getElementById("app");
    var newElement = element.innerHTML = 'Howdy'
    return newElement
  }

  return {
    grabId: grabId,  
    howdy: howdy
  } 

})();
