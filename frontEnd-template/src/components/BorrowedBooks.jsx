import { useState, useEffect } from "react";

function BorrowedBooks() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const fetchBorrowedBooks = async () => {
    try {
      const response = await fetch("http://localhost:8080/books/borrowed");

      if (!response.ok) {
        throw new Error("Failed to fetch borrowed books");
      }

      const data = await response.json();
      setBorrowedBooks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Borrowed Books</h2>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {borrowedBooks.length === 0 && !loading && (
        <p className="text-gray-600">No borrowed books at the moment.</p>
      )}

      {borrowedBooks.length > 0 && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book) => (
              <tr key={book.id} className="text-center">
                <td className="p-2 border">{book.id}</td>
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">{book.author.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BorrowedBooks;
