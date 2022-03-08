import React, { useContext } from 'react';
import NotesContext from '../store/notes-context';

import ReactMarkdown from 'react-markdown';

const maxNoteLength = 200;

const Note = (props) => {
  const notesContext = useContext(NotesContext);

  const note = props.note;
  const content =
    note.content.length > maxNoteLength
      ? note.content.substring(0, maxNoteLength) + '...'
      : note.content;

  return (
    <li className="note">
      <div className="note-content">
        <ReactMarkdown className="markdown">{content}</ReactMarkdown>
        <p className="note-date">{note.date}</p>
      </div>
      <div className="note-button-container">
        <button
          className="btn btn-delete"
          onClick={() => notesContext.deleteNote(note.id)}
        >
          Delete note
        </button>
      </div>
    </li>
  );
};

export default Note;
