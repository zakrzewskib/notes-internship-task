import AddNoteForm from './components/AddNoteForm';
import Header from './components/Header';
import NotesList from './components/Notes/NotesList';

const App = () => {
  return (
    <>
      <Header />
      <AddNoteForm />
      <NotesList />
    </>
  );
};

export default App;
