function SingleNoteViewTest() {
  var note = new NoteModel("String")
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.displaySingle() == "<div>String</div>");
}

SingleNoteViewTest();
