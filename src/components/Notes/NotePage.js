import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NotesContext from '../../store/notes-context';
import Note from './Note';

const NotePage = (props) => {
  const { id } = useParams();
  const notesContext = useContext(NotesContext);
  const note = notesContext.notes.find((note) => note.id === id);

  console.log(note);
  console.log(notesContext.notes);

  return <Note note={note} />;
};

export default NotePage;
