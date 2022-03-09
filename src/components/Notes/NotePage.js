import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NotesContext from '../../store/notes-context';

import ReactMarkdown from 'react-markdown';

import classes from './NotePage.module.css';

const formatDate = (date) => {
  const dateObject = new Date(date);

  const dd = String(dateObject.getDate()).padStart(2, '0');
  const mm = String(dateObject.getMonth() + 1).padStart(2, '0');
  const yyyy = dateObject.getFullYear();

  return `${mm}/${dd}/${yyyy}`;
};

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const notesContext = useContext(NotesContext);
  const note = notesContext.notes.find((note) => note.id === id);

  const navigateBack = () => {
    navigate('/');
  };

  const deleteNote = () => {
    navigateBack();
    notesContext.deleteNote(note.id);
  };

  if (note == null) {
    return (
      <div className="container">
        <h1>Note not found!</h1>
      </div>
    );
  }

  return (
    <article className="container">
      <div className={classes['note-buttons']}>
        <button
          onClick={navigateBack}
          className={`btn ${classes['btn-go-back']}`}
        >
          Go back
        </button>
        <button onClick={deleteNote} className="btn btn-delete">
          Delete note
        </button>
      </div>
      <div className={classes['note']}>
        <div className={classes['note-content']}>
          <ReactMarkdown className={classes['markdown']}>
            {note.content}
          </ReactMarkdown>
          <p className={classes['note-date']}>{formatDate(note.date)}</p>
        </div>
        <div className={classes['note-button-container']}></div>
      </div>
    </article>
  );
};

export default NotePage;
