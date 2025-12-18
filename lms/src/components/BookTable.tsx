import React from "react";
import type { Book } from "../types/Book";


interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id?: number) => void;
}

const BookTable: React.FC<Props> = ({ books, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse mt-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Image</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Author</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Rack</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="hover:bg-gray-100">
            <td className="border p-2">
              <img src={book.imageUrl} alt={book.title} className="w-16 h-16 object-cover"/>
            </td>
            <td className="border p-2">{book.title}</td>
            <td className="border p-2">{book.author}</td>
            <td className="border p-2">{book.description}</td>
            <td className="border p-2">{book.rackNumber}</td>
            <td className="border p-2">{book.status}</td>
            <td className="border p-2 flex gap-2">
              <button className="bg-yellow-400 p-1 rounded" onClick={() => onEdit(book)}>Edit</button>
              <button className="bg-red-500 text-white p-1 rounded" onClick={() => onDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
