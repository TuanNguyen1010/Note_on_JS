function SingleNoteView(anything) {
    this.anything = anything;
}

SingleNoteView.prototype = function () {
  function displaySingle() {
    return "<div>" + (this.anything).display() + "</div>";
  }

  return {
  displaySingle: displaySingle
}
};
