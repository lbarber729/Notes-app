"use strict";

(function(exports) {

  function NoteList(){
   this._myNotes = [];
}

  NoteList.prototype.addNote = function(note) {
    this._myNotes.push(note);
  };

  NoteList.prototype.returnNote = function () {
    return this._myNotes;
  };

 exports.NoteList = NoteList;
})(this);
