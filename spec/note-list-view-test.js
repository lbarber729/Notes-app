function testCanListNotes(){
  var note1 = new Note("First Note");
    var noteList = new NoteList();
  var noteListView = new NoteListView;
  noteList.addNote(note1.text);
  var note2 = new Note("Second Note");
  noteList.addNote(note2.text);
  console.log(noteListView._noteList);
  assert.isEqualTo(noteListView.listNotes(), "<ul><li><div>First Note</div></li><li><div>Second Note</div></li></ul>")
};

testCanListNotes();

// function testWontListWhenNoNotes(){
//   var note = new Note();
//   assert.isEqualTo(note.listNotes(), "No Notes!")
//   };
//
// testWontListWhenNoNotes();
