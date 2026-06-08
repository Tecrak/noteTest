import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Notes App",
      addNote: "Add Note",
      editNote: "Edit Note",
      delete: "Delete",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      noteTitle: "Title",
      noteContent: "Content",
      noNotes: "No notes found. Create one!",
      secret:"Oh NOOOOOOOOO",
    }
  },
  ua: {
    translation: {
      title: "Нотатки",
      addNote: "Додати нотатку",
      editNote: "Редагувати нотатку",
      delete: "Вилити",
      edit: "Редагувати",
      save: "Зберегти",
      cancel: "Скасувати",
      noteTitle: "Заголовок",
      noteContent: "Вміст нотатки",
      noNotes: "Нотаток не знайдено. Створіть першу!",
      secret:"ОООО НІІІІІІ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;