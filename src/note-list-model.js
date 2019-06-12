"use strict";


(function(exports) {

  function NoteList(){
   this.myNotes = [];
}

  NoteList.prototype.addNote = function(note) {
    this.myNotes.push(note);
  };

  NoteList.prototype.returnNote = function () {
    return this.myNotes;
  };

 exports.NoteList = NoteList;
})(this);
