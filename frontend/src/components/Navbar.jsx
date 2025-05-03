import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">CURD Operation</h1>
      <div>
        <Link to="/" className="px-3">
          Home
        </Link>
        <Link to="/records" className="px-3">
          Manage Records
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;
