import axios from 'axios';

const BASE_URL = 'http://localhost:5266/notes'; 

export interface Note {
  id?: number;
  title: string;
  content: string;
}

export const noteService = {
  getAll: async (): Promise<Note[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  create: async (note: Note): Promise<Note> => {
    const response = await axios.post(BASE_URL, note);
    return response.data;
  },
  update: async (id: number, note: Note): Promise<Note> => {
    const response = await axios.put(`${BASE_URL}/${id}`, note);
    return response.data;
  },
  delete: async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
  }
};