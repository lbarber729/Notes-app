function testCanListNotes(){
  var noteList = new NoteList();
  var note1 = new Note("This is a very long note");
  var noteListView = new NoteListView(noteList);
  noteList.addNote(note1);
  assert.isEqualTo(noteListView.listNotes(), "<ul><li><div><a href='http://localhost:8080#notes/2'> This is a very long </a></div></li></ul>")
};

testCanListNotes();

// function testWontListWhenNoNotes(){
//   var noteList = new NoteList();
//   var noteListView = new NoteListView(noteList);
//   assert.isEqualTo(noteLListView.listNotes(), "No Notes!")
//   };
//
// testWontListWhenNoNotes();
