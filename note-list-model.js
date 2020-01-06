(function(exports){
  function NoteListModel(){
    list = []
  };
  NoteListModel.prototype.add = function(words){
    return list.push(words);
  }

  NoteListModel.prototype.showList = function(){
    return list
  }

  exports.NoteListModel = NoteListModel;
})(this);