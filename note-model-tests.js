function NoteModelToDisplayText(){
  var noteModel = new NoteModel("I love javascript");
  assert.isTrue(noteModel.display() === "I love javascript");
};

NoteModelToDisplayText();