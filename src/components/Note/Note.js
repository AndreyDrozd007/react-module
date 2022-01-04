import NoteLayout from "./NoteLayout";

const Note = ({ note, activeNote, setActiveNote }) => {
  
  const handleClick = (id) => {
    const handleNote = activeNote === id ? null : id;
    setActiveNote(handleNote);
  };

  return (
    <NoteLayout handleClick={handleClick} note={note} activeNote={activeNote} />
  );
};

export default Note;
