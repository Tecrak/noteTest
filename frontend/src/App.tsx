import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { noteService, type Note } from './services/api';
import styles from './styles/App.module.css';
import HeadPart from './components/headPart';
import DeleteBttn from './components/deleteBttn';
import EditBttn from './components/editBttn';
import FormSubmit from './components/formSubmit';

function App() {
  const { t, i18n } = useTranslation();
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const data = await noteService.getAll();
      setNotes(data);
    } catch (error) {
      console.error("Помилка завантаження нотаток:", error);
    }
  };

  const globalProps = { 
    styles, i18n, t, noteService, loadNotes, 
    setNotes, setEditingId, setTitle, setContent, 
    notes, title, content, editingId 
  };

  return (
    <div className={styles.container}>
      <HeadPart {...globalProps}/>

      <main className={styles.mainGrid}>
        <div className={styles.formWrapper}>
          <FormSubmit {...globalProps}/>
        </div>
        <div className={styles.notesList}>
          {notes.length === 0 ? (
            <div className={styles.emptyState}>{t('noNotes')}</div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className={styles.noteCard}>
                <div className={styles.noteContent}>
                  <h3>{t('noteTitle')}:</h3>
                  <h3>{note.title}</h3>
                  <p>{t('noteContent')}:</p>
                  <p>{note.content}</p>
                </div>
                <div className={styles.actions}>
                  <EditBttn noteId={note.id} {...globalProps} note={note} />
                  <DeleteBttn noteId={note.id} {...globalProps} />
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;