import React, { useEffect, useState } from "react";
import { addBook, deleteBook, getBooks, updateBook } from "../../services/api";
import type { Book } from "../../types/Book";
import BookFormModal from "../BookFormModal";
import BookTable from "../BookTable";
import Navbar from "../Navbar";

const ManageBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editBook, setEditBook] = useState<Book | undefined>(undefined);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      console.log("Books from API:", response.data);
      setBooks(response.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleAddEdit = async (book: Book) => {
    if (book.id) {
      await updateBook(book.id, book);
    } else {
      await addBook(book);
    }
    setModalVisible(false);
    setEditBook(undefined);
    fetchBooks();
  };

  const handleDelete = async (id?: number) => {
    if (!id) return;
    if (window.confirm("Are you sure to delete this book?")) {
      await deleteBook(id);
      fetchBooks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Container with responsive padding */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8">

        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Manage Books</h1>
          <button
            className="bg-black hover:bg-orange-700 transition text-white px-3 sm:px-4 py-2 rounded text-sm sm:text-base"
            onClick={() => setModalVisible(true)}
          >
            Add Book
          </button>
        </div>

        {/* Responsive table wrapper */}
        <div className="overflow-x-auto">
          <BookTable
            books={books}
            onEdit={(book) => {
              setEditBook(book);
              setModalVisible(true);
            }}
            onDelete={handleDelete}
          />
        </div>
      </div>

   
      <BookFormModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleAddEdit}
        bookToEdit={editBook}
      />
    </div>
  );
};

export default ManageBooks;
