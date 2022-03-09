import React, { useContext } from 'react';
import NotesContext from '../../store/notes-context';
import Note from './Note';

import classes from './NotesList.module.css';

const NotesList = () => {
  const notesContext = useContext(NotesContext);

  const notes = notesContext.notes;

  if (notes.length === 0) {
    return (
      <div className={classes['notes-list container']}>
        <h1 className={classes['notes-header']}>No notes</h1>
      </div>
    );
  }

  const notesList = notes.map((note) => (
    <Note key={note.id} note={note} />
  ));

  return (
    <article className={`${classes['notes-list']} container`}>
      <header className={classes['notes-header']}>
        <h1>Latest notes</h1>
      </header>
      <section>
        <ul>{notesList}</ul>
      </section>
    </article>
  );
};

export default NotesList;
