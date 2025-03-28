import { useState } from "react";

function IssueBook() {
  const [bookId, setBookId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/books/issue/${bookId}/member/${memberId}`, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Failed to issue book");
      }

      setMessage("Book issued successfully!");
      setBookId("");
      setMemberId("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Issue a Book</h2>

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
          Issue Book
        </button>
      </form>
    </div>
  );
}

export default IssueBook;


// import { useState, useEffect } from "react";

// function IssueBook() {
//   const [books, setBooks] = useState([]);
//   const [members, setMembers] = useState([]);
//   const [selectedBook, setSelectedBook] = useState("");
//   const [selectedMember, setSelectedMember] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8080/books")
//       .then((response) => response.json())
//       .then((data) => setBooks(data))
//       .catch((error) => console.error("Error fetching books:", error));
//   }, []);

//   useEffect(() => {
//     fetch("http://localhost:8080/members")
//       .then((response) => response.json())
//       .then((data) => setMembers(data))
//       .catch((error) => console.error("Error fetching members:", error));
//   }, []);

//   const handleIssue = () => {
//     if (!selectedBook || !selectedMember) {
//       setMessage("Please select both a book and a member.");
//       return;
//     }

//     fetch(`http://localhost:8080/books/issue/${selectedBook}/member/${selectedMember}`, {
//       method: "PUT",
//     })
//       .then((response) => response.text())
//       .then((data) => setMessage(data))
//       .catch(() => setMessage("Failed to issue book."));
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="bg-white p-6 shadow-lg rounded-lg w-96">
//         <h2 className="text-2xl font-bold mb-4 text-center">Issue Book</h2>

//         {/* Select Book */}
//         <div className="mb-4">
//           <label className="block font-bold mb-1 text-center">Select Book:</label>
//           <select
//             className="p-2 border rounded w-full"
//             onChange={(e) => setSelectedBook(e.target.value)}
//           >
//             <option value="">-- Select a Book --</option>
//             {books.map((book) => (
//               <option key={book.id} value={book.id}>
//                 {book.title} (ID: {book.id})
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Select Member */}
//         <div className="mb-4">
//           <label className="block font-bold mb-1 text-center">Select Member:</label>
//           <select
//             className="p-2 border rounded w-full"
//             onChange={(e) => setSelectedMember(e.target.value)}
//           >
//             <option value="">-- Select a Member --</option>
//             {members.map((member) => (
//               <option key={member.id} value={member.id}>
//                 {member.name} (ID: {member.id})
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Issue Button */}
//         <div className="text-center">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleIssue}>
//             Issue Book
//           </button>
//         </div>

//         {/* Message */}
//         {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default IssueBook;

