import React, { useReducer } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import NotesContext from './notes-context';

const defaultNotesState = {
  notes: [],
};

const notesReducer = (state, action) => {
  if (action.type === 'DELETE') {
    const updatedNotes = state.notes.filter(
      (note) => note.id !== action.id
    );
    action.setNotes(updatedNotes);
    return {
      notes: updatedNotes,
    };
  }

  if (action.type === 'ADD') {
    const updatedNotes = [action.note, ...state.notes];
    action.setNotes(updatedNotes);
    return {
      notes: updatedNotes,
    };
  }

  return defaultNotesState;
};

const NotesProvider = (props) => {
  const [notes, setNotes] = useLocalStorage('notes', []);

  const [notesState, dispatchNotesAction] = useReducer(
    notesReducer,
    defaultNotesState
  );

  const deleteNote = (id) => {
    dispatchNotesAction({ type: 'DELETE', id: id, setNotes });
  };

  const addNote = (note) => {
    dispatchNotesAction({ type: 'ADD', note: note, setNotes });
  };

  const notesContext = { notes, deleteNote, addNote };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
