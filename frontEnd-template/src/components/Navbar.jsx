import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library Management</h1>
        <div className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Books
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/issue"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Issue Book
          </NavLink>
          <NavLink
            to="/return"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Return Book
          </NavLink>
          <NavLink
            to="/borrowed"
            className={({ isActive }) =>
              `px-3 py-2 rounded ${
                isActive ? "bg-blue-800" : "hover:bg-blue-700"
              }`
            }
          >
            Borrowed Books
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
