import React from "react";
import type { Book } from "../types/Book";

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id?: number) => void;
}

const BookTable: React.FC<Props> = ({ books, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse mt-4 table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Image</th>
          <th className="border p-2">Title</th>
          <th className="border p-2">Author</th>
          <th className="border p-2 w-72">Description</th>
          <th className="border p-2">Rack</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="hover:bg-gray-100">
            <td className="border p-2">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-16 h-16 object-cover"
              />
            </td>
            <td className="border p-2">{book.title}</td>
            <td className="border p-2">{book.author}</td>
            <td className="border p-2 w-72 break-words">{book.description}</td>
            <td className="border p-2">{book.rackNumber}</td>
            <td className="border p-2">{book.status}</td>
            <td className="border p-2">
              {/* Use flex with gap horizontally to match row height */}
              <div className="flex justify-center items-center gap-2 h-full">
                <button
                  className="bg-black text-white px-2 py-1 rounded"
                  onClick={() => onEdit(book)}
                >
                  Edit
                </button>
                <button
                  className="bg-orange-700 text-white px-2 py-1 rounded"
                  onClick={() => onDelete(book.id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
