import React, { useState, useContext } from 'react';
import NotesContext from '../store/notes-context';

import classes from './AddNoteForm.module.css';

const isNotEmpty = (value) => {
  return value.trim() !== '';
};

const generateId = (notes) => {
  if (notes.length === 0) {
    return 1;
  }
  const notesIds = notes.map((note) => note.id);
  return Math.max(...notesIds) + 1;
};

const AddNoteForm = () => {
  const notesContext = useContext(NotesContext);

  const [noteContent, setNoteContent] = useState('');

  const formIsValid = isNotEmpty(noteContent);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    notesContext.addNote({
      id: generateId(notesContext.notes).toString(),
      date: Date(),
      content: noteContent,
    });

    setNoteContent('');
  };

  return (
    <article>
      <form
        onSubmit={onSubmit}
        className={`${classes['add-note-form']} container`}
      >
        <label htmlFor="note-content">Note</label>
        <textarea
          type="text"
          name="note-content"
          id="note-content"
          rows="10"
          placeholder="Note text in *markdown*"
          value={noteContent}
          onChange={(event) => setNoteContent(event.target.value)}
        />
        <button
          disabled={!formIsValid}
          type="submit"
          className="btn btn-add"
        >
          Add note
        </button>
      </form>
    </article>
  );
};

export default AddNoteForm;
