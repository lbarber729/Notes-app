"use strict";

(function(exports) {

  function NoteListView(noteList) {
    // this._listNotes = [];
    this._noteList = noteList;
  }

  NoteListView.prototype.listNotes = function() {

    var tag = '<ul>'
      for (var i = 0; i < this._noteList._myNotes.length; ++i) {
    tag += "<li><div><a href='http://localhost:8080#notes/" + this._noteList._myNotes[i]._id + "'> " + this._noteList._myNotes[i]._text.substring(0, 20) + "</a></div></li>"
    };
      tag += '</ul>'
      return tag

    // this._listNotes.push('<ul><li><div>');
    // this._listNotes.push(this._noteList._myNotes.join('</div></li><li><div>'));
    // this._listNotes.push('</div></li></ul>');
    // return this._listNotes.join('');
  };

  exports.NoteListView = NoteListView;
 })(this);
