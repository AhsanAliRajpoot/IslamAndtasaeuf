import axios from "axios";
import { Chapter } from "./types";

const API_BASE_URL = "http://192.168.100.7:3000/api";

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch books
export const fetchBooks = async () => {
  const response = await api.get("/books");
  return response.data;
};

// Fetch chapters
export const fetchChapters = async (bookId: number) => {
  console.log(bookId);
  const response = await api.get(`/chapters/${bookId}`);
  return response.data;
};

export const fetchChapterData = async (
  bookId: number,
  chapterId: number
): Promise<Chapter> => {
  const response = await api.get(
    `/chapters/books/${bookId}/chapters/${chapterId}`
  );
  return response.data;
};

// `/chapters/books/${bookId}/chapters/${chapterId}`

// Fetch a specific chapter by bookId and chapterNumber
export const fetchChapterByBookAndNumber = async (
  bookId: number,
  chapterNumber: number
) => {
  const response = await api.get(
    `/chapters/books/${bookId}/chapters/${chapterNumber}`
  );
  return response.data;
};

export default api;
