function testNoteListView() {
  var noteList = new NoteListModel();
  var noteListView = new NoteListView(noteList)

  noteList.add('Hello');
  noteList.add('2nd Note')

  var result = noteListView.getHTML();

  assert.isTrue(result === '<ul><li><div>Hello</div></li><li><div>2nd Note</div></li></ul>');

};

testNoteListView(); 