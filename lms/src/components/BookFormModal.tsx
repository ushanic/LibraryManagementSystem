import React, { useEffect, useState } from "react";
import type { Book } from "../types/Book";

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: (book: Book) => void;
  bookToEdit?: Book;
}

const BookFormModal: React.FC<Props> = ({
  visible,
  onClose,
  onSubmit,
  bookToEdit,
}) => {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    description: "",
    rackNumber: "",
    status: "Available",
    imageUrl: "",
  });

  useEffect(() => {
    if (bookToEdit) setBook(bookToEdit);
  }, [bookToEdit]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(book);
    setBook({
      title: "",
      author: "",
      description: "",
      rackNumber: "",
      status: "Available",
      imageUrl: "",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl mb-4">
          {bookToEdit ? "Edit Book" : "Add Book"}
        </h2>
        <input
          name="title"
          placeholder="Title"
          value={book.title}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="author"
          placeholder="Author"
          value={book.author}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={book.description}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="rackNumber"
          placeholder="Rack Number"
          value={book.rackNumber}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="status"
          placeholder="Status"
          value={book.status}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <input
          name="imageUrl"
          placeholder="Image URL"
          value={book.imageUrl}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        />
        <div className="flex justify-end gap-2 mt-2">
          <button className="bg-gray-400 p-2 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-orange-700 text-white p-2 rounded"
            onClick={handleSubmit}
          >
            {bookToEdit ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookFormModal;
