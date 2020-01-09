function NoteModelControllerTest(){
  var noteController = new NoteController
  assert.isTrue(noteController.howdy() === 'Howdy')

};

NoteModelControllerTest();
