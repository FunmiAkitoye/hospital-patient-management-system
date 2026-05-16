import { Link, useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white p-6">

        <h1 className="text-2xl font-bold mb-8">
          Hospital App
        </h1>

        <nav className="space-y-4">

          <Link to="/dashboard" className="block hover:text-gray-200">
            Dashboard
          </Link>

          <Link to="/appointments" className="block hover:text-gray-200">
            Appointments
          </Link>

          <Link to="/clinics" className="block hover:text-gray-200">
            Clinics
          </Link>

          <Link to="/profile" className="block hover:text-gray-200">
            Profile
          </Link>

          <button
            onClick={logout}
            className="mt-6 bg-red-500 px-3 py-2 rounded-lg w-full"
          >
            Logout
          </button>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

        {children}

      </div>

    </div>
  );
}

export default DashboardLayout;