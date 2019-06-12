function testCanListNotes(){
  var note1 = new Note("First Note");
  var note2 = new Note("Second Note");
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.addNote(note1.text);
  noteList.addNote(note2.text);
  assert.isEqualTo(noteListView.listNotes(), "<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>")
};

testCanListNotes();

// function testWontListWhenNoNotes(){
//   var note = new Note();
//   assert.isEqualTo(note.listNotes(), "No Notes!")
//   };
//
// testWontListWhenNoNotes();
