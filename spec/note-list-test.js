function testCanListNote(){
    var note = new Note("First Note");
    var noteList = new NoteList();
    noteList.addNote(note.text);
    assert.isTrue(noteList.myNotes.length === 1);
    assert.isEqualTo(noteList.returnNote()[0], "First Note");
};

testCanListNote();
