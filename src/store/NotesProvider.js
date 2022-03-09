import React, { useReducer } from 'react';

import NotesContext from './notes-context';

const defaultNotesState = {
  notes: [],
};

const notesReducer = (state, action) => {
  if (action.type === 'DELETE') {
    const updatedNotes = state.notes.filter(
      (note) => note.id !== action.id
    );
    return {
      notes: updatedNotes,
    };
  }

  if (action.type === 'ADD') {
    const updatedNotes = [action.note, ...state.notes];
    return {
      notes: updatedNotes,
    };
  }

  return defaultNotesState;
};

const NotesProvider = (props) => {
  const [notesState, dispatchNotesAction] = useReducer(
    notesReducer,
    defaultNotesState
  );

  const deleteNote = (id) => {
    dispatchNotesAction({ type: 'DELETE', id: id });
  };

  const addNote = (note) => {
    dispatchNotesAction({ type: 'ADD', note: note });
  };

  const notesContext = { notes: notesState.notes, deleteNote, addNote };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
