import React, { useReducer } from 'react';
import NotesContext from './notes-context';

const NOTES_MOCK = [
  {
    id: '1',
    date: '06/19/2020',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    id: '2',
    date: '06/18/2020',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nobis, quia earum sunt placeat modi illum fugit **aliquid labore nesciunt** in ullam totam tenetur hic voluptatem autem ratione. Modi, exercitationem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nobis, quia earum sunt placeat modi illum fugit aliquid labore nesciunt in ullam totam tenetur hic voluptatem autem ratione. Modi, exercitationem.',
  },
  {
    id: '3',
    date: '06/17/2020',
    content: '# Hello World',
  },
];

const defaultNotesState = {
  notes: NOTES_MOCK,
};

const notesReducer = (state, action) => {
  if (action.type === 'DELETE') {
    const updatedNotes = state.notes.filter(
      (note) => note.id !== action.id
    );
    return {
      notes: updatedNotes,
    };
    console.log(state);
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

  const notesContext = { notes: notesState.notes, deleteNote };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
