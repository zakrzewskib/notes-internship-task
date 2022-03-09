import React, { useContext } from 'react';
import NotesContext from '../../store/notes-context';
import ReactMarkdown from 'react-markdown';

import classes from './Note.module.css';

const maxNoteLength = 200;

const formatDate = (date) => {
  const dateObject = new Date(date);

  const dd = String(dateObject.getDate()).padStart(2, '0');
  const mm = String(dateObject.getMonth() + 1).padStart(2, '0');
  const yyyy = dateObject.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
};

const Note = (props) => {
  const notesContext = useContext(NotesContext);

  const note = props.note;
  const content =
    note.content.length > maxNoteLength
      ? note.content.substring(0, maxNoteLength) + '...'
      : note.content;

  const date = formatDate(note.date);

  return (
    <li className={classes['note']}>
      <div className={classes['note-content']}>
        <ReactMarkdown className={classes['markdown']}>
          {content}
        </ReactMarkdown>
        <p className={classes['note-date']}>{date}</p>
      </div>
      <div className={classes['note-button-container']}>
        <button
          className={`btn ${classes['btn-delete']}`}
          onClick={() => notesContext.deleteNote(note.id)}
        >
          Delete note
        </button>
      </div>
    </li>
  );
};

export default Note;
