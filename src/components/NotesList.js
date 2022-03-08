import React from 'react';
import Note from './Note';

const NotesList = (props) => {
  const notes = props.notes.map((note) => (
    <Note key={note.id} note={note} />
  ));

  return (
    <div className="notes-list container">
      <h1>Latest notes</h1>
      <ul>{notes}</ul>
    </div>
  );
};

export default NotesList;
