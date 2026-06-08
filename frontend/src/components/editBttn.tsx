import type { GlobalProps } from '../types';

export default function EditBttn({
  noteId,
  setEditingId,
  setTitle,
  setContent,
  styles,
  t,
  note
}: GlobalProps) {
  
  const handleEditClick = () => {
    if (noteId === undefined) return;
    if (!note) {
      return;
    }
    setEditingId(noteId);     
    setTitle(note.title);     
    setContent(note.content); 
  };

  return (
    <button onClick={handleEditClick} className={styles.editBtn}>
      {t('edit')}
    </button>
  );
}