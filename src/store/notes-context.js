import React from 'react';

const NotesContext = React.createContext({
  notes: [],
  addNote: (note) => {},
  deleteNote: (id) => {},
});

export default NotesContext;
