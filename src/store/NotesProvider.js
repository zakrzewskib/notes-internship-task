import React, { useReducer, useEffect, useCallback } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import NotesContext from './notes-context';

const NOTES_MOCK = [
  {
    id: '1',
    date: '06/17/2020',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    id: '2',
    date: '06/19/2020',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nobis, quia earum sunt placeat modi illum fugit **aliquid labore nesciunt** in ullam totam tenetur hic voluptatem autem ratione. Modi, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nobis, quia earum sunt placeat modi illum fugit aliquid labore nesciunt in ullam totam tenetur hic voluptatem autem ratione. Modi, exercitationem.',
  },
  {
    id: '3',
    date: '06/20/2020',
    content: '# Hello World',
  },
];

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
