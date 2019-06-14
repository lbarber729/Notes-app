function testNoteController(){
  var notecontroller = new NoteController(new NoteList());
  assert.isEqualTo(notecontroller.getHtml(), "<ul><li><div><a href='http://localhost:8080#notes/3'> Favourite drink: sel</a></div></li></ul>")
};

testNoteController();
