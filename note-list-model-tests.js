function testNoteListModelToDisplayList() {
  var noteList = new NoteListModel()
  noteList.add("happy day")
  assert.isTrue(noteList.showList()[0] == "happy day");
};

testNoteListModelToDisplayList();