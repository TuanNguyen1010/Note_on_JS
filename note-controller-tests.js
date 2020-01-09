function NoteModelControllerTest(){
  var noteController = new NoteController(new NoteListModel())
  assert.isTrue(noteController.howdy() === 'Howdy')

};

function NoteControllerDisplayHTML() {
  var noteList = new NoteListModel();
  noteList.add("hi")
  var noteController = new NoteController(noteList)
  assert.isTrue(noteController.displayHTML() === "<ul><li><div>hi</div></li></ul>")
}; 

NoteModelControllerTest();
NoteControllerDisplayHTML();
