import { useState } from "react";

function ReturnBook() {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/books/return/${bookId}/member/${memberId}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to return book");
      }

      setMessage("Book returned successfully!");
      setBookId("");
      setMemberId("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Return a Book</h2>

      {message && <p className="text-green-600">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Book ID</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Member ID</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={memberId}
            onChange={(e) => setMemberId(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Return Book
        </button>
      </form>
    </div>
  );
}

export default ReturnBook;
