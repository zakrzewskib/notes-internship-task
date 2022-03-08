import React from 'react';

const AddNoteForm = () => {
  return (
    <form className="add-note-form container">
      <label htmlFor="note-content">Note</label>
      <textarea
        type="text"
        name="note-content"
        id="note-content"
        rows="10"
        placeholder="Note text in *markdown*"
      />
      <button type="submit" className="btn-primary">
        Add note
      </button>
    </form>
  );
};

export default AddNoteForm;
