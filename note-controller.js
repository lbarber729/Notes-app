"use strict";

(function(exports)  {

function NoteController(notelist){
  this.notelist = notelist;
  this.note1 = new Note('Favourite drink: seltzer');
  this.notelist.addNote(this.note1.text);
  this.note2 = new Note('Favourite food: pizza');
  this.notelist.addNote(this.note2.text);
  this.notelistview = new NoteListView(notelist);
}

NoteController.prototype.getHtml = function() {
  var list = this.notelistview.listNotes();
  return document.getElementById("app").innerHTML = this.notelistview.listNotes();

};

exports.NoteController = NoteController;
})(this);
