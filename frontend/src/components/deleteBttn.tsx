import { Trash2 } from 'lucide-react';
import type { GlobalProps } from '../types';

export default function DeleteBttn({ noteId, noteService, loadNotes, i18n, styles }: GlobalProps){

const handleDelete = async (id: number) => {
    if (window.confirm(i18n.language === 'en' ? 'Are you sure?' : 'Ви впевнені?')) {
      try {
        await noteService.delete(id);
        loadNotes();
      } catch (error) {
        console.error("Помилка видалення:", error);
      }
    }
  };
    return (
        <button onClick={() => noteId && handleDelete(noteId)} className={`${styles.actionBtn} ${styles.deleteBtn}`}>
            <Trash2 size={18} />
        </button>
    )
}