import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList"; // ✅ Ensure the correct path
import AddBook from "./components/AddBook"
import IssueBook from "./components/IssueBook"
import ReturnBook from "./components/ReturnBook"
import BorrowedBooks from "./components/BorrowedBooks"

function App() {
  return (
    <Router>
      {/* ✅ Navbar is placed above Routes so it doesn't disappear */}

      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<BookList></BookList>}></Route>

        <Route path="/add" element = {<AddBook></AddBook>}></Route>

        <Route path="/issue" element = {<IssueBook></IssueBook>}></Route>

        <Route path="/return" element = {<ReturnBook></ReturnBook>}></Route>

        <Route path="/borrowed" element={<BorrowedBooks />} />

      </Routes>
    </Router>
  );
}

export default App;

{
  /* <Routes>
<Route path="/" element={<BookList />} />
<Route path="/add" element={<AddBook />} />
<Route path="/issue" element={<IssueBook />} />
<Route path="/return" element={<ReturnBook />} />
<Route path="/borrowed" element={<BorrowedBooks />} />
</Routes> */
}
