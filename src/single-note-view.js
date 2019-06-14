"use strict";

(function(exports) {

 function SingleNote(note) {
   this._note = note;
 }

 SingleNote.prototype.returnSingleNote = function() {
    return ("<div>" + this._note._text + "</div>")
  };

 exports.SingleNote = SingleNote;
})(this);
