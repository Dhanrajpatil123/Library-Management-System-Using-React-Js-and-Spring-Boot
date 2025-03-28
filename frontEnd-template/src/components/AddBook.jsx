import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      title,
      issued: false, // Default is not issued
      authorId: parseInt(authorId),
    };

    try {
      const response = await fetch("http://localhost:8080/books/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      setMessage("Book added successfully!");
      setTitle("");
      setAuthorId("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Add a New Book</h2>

      {message && <p className="text-green-600">{message}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Book Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Author ID</label>
          <input
            type="number"
            className="w-full border p-2 rounded"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
