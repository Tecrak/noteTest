import React from 'react';
import { Plus } from 'lucide-react';
import type { GlobalProps } from '../types'; 

export default function FormSubmit({
  styles, t, noteService, loadNotes,
  title, content, editingId,
  setTitle, setContent, setEditingId
}: GlobalProps) { 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId !== null && editingId !== undefined) {
        await noteService.update(editingId, { title, content });
        setEditingId(null);
      } else {
        await noteService.create({ title, content });
      }
      setTitle('');
      setContent('');
      loadNotes();
    } catch (error) {
      console.error("Помилка збереження:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>{t('noteTitle')}</label>
        <input type="text" value={title || ''} onChange={(e) => setTitle?.(e.target.value)} className={styles.input} required />
      </div>
      <div className={styles.formGroup}>
        <label>{t('noteContent')}</label>
        <textarea value={content || ''} onChange={(e) => setContent?.(e.target.value)} rows={4} className={styles.textarea} required />
      </div>
      <button type="submit" className={styles.submitBtn}>
        <Plus size={18} />
        {editingId ? t('save') : t('addNote')}
      </button>
      {editingId !== null && (
        <button 
          type="button" 
          onClick={() => { setEditingId(null); setTitle(''); setContent(''); }} 
          className={styles.cancelBtn}
        >
          {t('cancel')}
        </button>
      )}
    </form>
  );
}