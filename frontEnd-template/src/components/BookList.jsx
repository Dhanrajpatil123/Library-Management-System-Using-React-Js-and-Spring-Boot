// import { useEffect, useState } from "react";

// function BookList() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8080/books") // Replace with your API endpoint
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch books");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setBooks(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading)
//     return <p className="text-center text-gray-600">Loading books...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Available Books</h2>
//       {books.length === 0 ? (
//         <p className="text-gray-600">No books available</p>
//       ) : (
//         <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Title</th>
//               <th className="border p-2">Author</th>
//               <th className="border p-2">Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {books.map((book) => (
//               <tr key={book.id} className="text-center">
//                 <td className="border p-2">{book.id}</td>
//                 <td className="border p-2">{book.title}</td>
//                 <td className="border p-2">{book.author}</td>
//                 <td className="border p-2">{book.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default BookList;


import { useState, useEffect } from "react";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/books") // ✅ Replace with your backend URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading books...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Book List</h2>
      {books.length === 0 ? (
        <p className="text-center">No books available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border p-2">ID</th>
              <th className="border p-2">Title</th>
              <th className="border p-2">Author</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="text-center border">
                <td className="border p-2">{book.id}</td>
                <td className="border p-2">{book.title}</td>
                <td className="border p-2">{book.author.name}</td>
                <td className="border p-2">
                  {book.isIssued ? "Issued" : "Available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookList;
