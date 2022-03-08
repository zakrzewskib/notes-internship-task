import React from 'react';

const Note = (props) => {
  return (
    <li className="note">
      <div className="note-content">{props.note.content}</div>
      <div className="note-date">{props.note.date}</div>
      <button className="btn btn-delete">Delete note</button>
    </li>
  );
};

export default Note;
