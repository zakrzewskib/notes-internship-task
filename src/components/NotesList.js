import React, { useContext } from 'react';
import NotesContext from '../store/notes-context';
import Note from './Note';

const NotesList = () => {
  const notesContext = useContext(NotesContext);

  const notes = notesContext.notes;

  if (notes.length === 0) {
    return (
      <div className="notes-list container">
        <h1 className="notes-header">No notes</h1>
      </div>
    );
  }

  const notesList = notes.map((note) => (
    <Note key={note.id} note={note} />
  ));

  return (
    <div className="notes-list container">
      <h1 className="notes-header">Latest notes</h1>
      <ul>{notesList}</ul>
    </div>
  );
};

export default NotesList;
