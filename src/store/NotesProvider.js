import React from 'react';
import NotesContext from './notes-context';

const NotesProvider = (props) => {
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

  const notesContext = { notes: NOTES_MOCK };

  return (
    <NotesContext.Provider value={notesContext}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
