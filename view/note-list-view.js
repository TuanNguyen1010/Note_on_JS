function NoteListView(noteList){
  this.list = noteList
}

NoteListView.prototype = (function () {

  function getHTML() {
    var arr = this.list.showList().map(note => note)
    
    return '<ul><li><div>' + arr.join('</div></li><li><div>') + '</div></li></ul>'
  }

  return {
    getHTML: getHTML
  }
})();

// for(var index = 0; index < text.showList().length; index++){
//   return <li>text.showList()[index]; </li>
// }

