function testMyNotesStartsEmpty(){
    var note = new Note("First Note");
    assert.isTrue(note.returnText() === "First Note");
};

testMyNotesStartsEmpty();
