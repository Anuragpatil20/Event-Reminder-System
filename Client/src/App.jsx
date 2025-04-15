import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReminderList from "./components/ReminderList";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 p-4 flex justify-between items-center shadow-lg rounded-b-xl">
          <h1 className="text-3xl font-bold text-white animate-pulse ">
            <Link to="/">🗓️ Reminder System</Link>
          </h1>
          <div className="space-x-6">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out hover:scale-105 "
            >
            Reminders
            </Link>
            <Link
              to="/dashboard"
              className="text-white hover:text-yellow-300 font-semibold transition duration-300 ease-in-out"
            >
            Add Reminder
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <div className="p-6">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<ReminderList userId="user123" />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
