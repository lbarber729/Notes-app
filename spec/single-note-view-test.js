function testCanListSingleNote(){
  var note = new Note("First Note");
  var singlenote = new SingleNote(note);
  assert.isEqualTo(singlenote.returnSingleNote(), "<div>First Note</div>")
};

testCanListSingleNote();
