// (function(exports){
//   function NoteListModel(){
//     list = []
//   };
//   NoteListModel.prototype.add = function(words){
//     return list.push(words);
//   }

//   NoteListModel.prototype.showList = function(){
//     return list
//   }

//   exports.NoteListModel = NoteListModel;
// })(this);

function NoteListModel(){
  this.list = []
}
NoteListModel.prototype = (function () {
  function add(words) {
    var note = new NoteModel(words)
    this.list.push(note)
}

  function showList() {
    return this.list.map(note => note.display())
  }
  return {
    add: add, 
    showList: showList
  }
})();