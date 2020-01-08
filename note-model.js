// (function(exports){
//   function NoteModel(text){
//     this.text = text;
//   };
//   NoteModel.prototype.display = function(){
//     return this.text;
//   }
//   exports.NoteModel = NoteModel;
// })(this);


function NoteModel(text){
  this.text = text
}

NoteModel.prototype = (function () {

  function display() {
    return this.text
  }

  return {
    display: display
  }
})();