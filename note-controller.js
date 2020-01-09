function NoteController(noteList){
  this.noteList = noteList
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

  function displayHTML() {
    var noteListView = new NoteListView(this.noteList)
    var html = noteListView.getHTML()
    var element = document.getElementById("app");
    return element.innerHTML = html
  }


  return {
    grabId: grabId,  
    howdy: howdy,
    displayHTML: displayHTML
  } 

})();
