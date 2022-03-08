import AddNoteForm from './components/AddNoteForm';
import Header from './components/Header';
import NotesList from './components/NotesList';
import NotesProvider from './store/NotesProvider';

const App = () => {
  return (
    <NotesProvider>
      <Header />
      <AddNoteForm />
      <NotesList />
    </NotesProvider>
  );
};

export default App;
