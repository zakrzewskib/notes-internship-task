import AddNoteForm from './components/AddNoteForm';
import Header from './components/Header';
import NotesList from './components/NotesList';

const App = () => {
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
  ];

  return (
    <>
      <Header />
      <AddNoteForm />
      <NotesList notes={NOTES_MOCK} />
    </>
  );
};

export default App;
