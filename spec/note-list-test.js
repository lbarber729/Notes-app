function testCanListNote(){
    var note = new Note("First Note");
    var noteList = new NoteList();
    noteList.addNote(note._text);
    assert.isTrue(noteList._myNotes.length === 1);
    assert.isEqualTo(noteList.returnNote()[0], "First Note");
};

testCanListNote();
