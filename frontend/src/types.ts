import type { Note } from './services/api';

export interface GlobalProps {
  styles: Record<string, string>;
  t: (key: string) => string;
  i18n: any;
  notes?: Note[];
  title?: string;
  content?: string;
  editingId?: number | null;
  setTitle: (value: string) => void;
  setContent: (value: string) => void;
  setEditingId: (id: number | null) => void;
  noteService: any;
  loadNotes: () => Promise<void>;
  noteId?: number;
  note?: Note;
}