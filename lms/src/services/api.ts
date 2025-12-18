import axios from "axios";
import type { Book } from "../types/Book";


const API_URL = "https://localhost:5001/api/books";

export const getBooks = () => axios.get<Book[]>(API_URL);
export const addBook = (book: Book) => axios.post(API_URL, book);
export const updateBook = (id: number, book: Book) => axios.put(`${API_URL}/${id}`, book);
export const deleteBook = (id: number) => axios.delete(`${API_URL}/${id}`);
