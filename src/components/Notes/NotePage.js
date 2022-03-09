import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NotesContext from '../../store/notes-context';
import Note from './Note';

import classes from './NotePage.module.css';

const NotePage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const notesContext = useContext(NotesContext);
  const note = notesContext.notes.find((note) => note.id === id);

  return (
    <article className="container">
      <div className={classes['note-buttons']}>
        <button
          onClick={() => navigate('/')}
          className={`btn ${classes['btn-go-back']}`}
        >
          Go back
        </button>
        <button className="btn btn-delete">Delete note</button>
      </div>
      <Note note={note} />
    </article>
  );
};

export default NotePage;
