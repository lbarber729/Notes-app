(function(exports)  {

function NoteController(notelist){
  this.notelist = notelist;
  this.note1 = new Note('Favourite drink: seltzer');
  this.notelist.addNote(this.note1);
  this.notelistview = new NoteListView(notelist);
}

NoteController.prototype.getHtml = function() {
  var list = this.notelistview.listNotes();
  return document.getElementById("app").innerHTML = list;

};

exports.NoteController = NoteController;
})(this);
