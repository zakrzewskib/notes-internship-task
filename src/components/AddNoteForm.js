import React, { useState } from 'react';

const isNotEmpty = (value) => {
  return value.trim() !== '';
};

const AddNoteForm = () => {
  const [noteContent, setNoteContent] = useState('');

  const formIsValid = isNotEmpty(noteContent);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(noteContent);
  };

  return (
    <form onSubmit={onSubmit} className="add-note-form container">
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
        className="btn-primary"
      >
        Add note
      </button>
    </form>
  );
};

export default AddNoteForm;
