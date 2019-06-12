"use strict";

(function(exports) {

  function NoteListView(noteList) {
    this._listNotes =[];
    this._noteList = noteList;
  }

  NoteListView.prototype.listNotes = function() {
    // if (NoteList.myNotes.length > 0) {
      this._listNotes.push('<ul><li><div>');
      this._listNotes.push(this.noteList.myNotes.join('</div></li><li><div>'));
      this._listNotes.push('</div></li></ul>');
      return this._listNotes.join('');
    // } else {
    //   return 'No Notes!';
    // }

  };

  exports.NoteListView = NoteListView;
 })(this);
