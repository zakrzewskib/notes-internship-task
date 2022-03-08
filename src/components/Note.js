import React from 'react';

const maxNoteLength = 200;

const Note = (props) => {
  const note = props.note;
  const content =
    note.content.length > maxNoteLength
      ? note.content.substring(0, maxNoteLength) + '...'
      : note.content;

  return (
    <li className="note">
      <div className="note-content">
        <p>{content}</p>
        <p className="note-date">{note.date}</p>
      </div>
      <div className="note-button-container">
        <button className="btn btn-delete">Delete note</button>
      </div>
    </li>
  );
};

export default Note;