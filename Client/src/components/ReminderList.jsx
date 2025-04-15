import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

export default function ReminderList({ userId }) {
  const [reminders, setReminders] = useState([]);

  const fetchReminders = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/reminders/${userId}`);
      setReminders(res.data);
    } catch (err) {
      toast.error('❌ Failed to fetch reminders');
    }
  };

  useEffect(() => {
    fetchReminders();
  }, [userId]);

  const deleteReminder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/reminders/${id}`);
      toast.success('✅ Reminder deleted successfully');
      setReminders((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      toast.error('❌ Error deleting reminder');
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-8 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Upcoming Reminders</h2>
      {reminders.length === 0 ? (
        <p className="text-center text-gray-200">No reminders yet. Add one!</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {reminders.map((rem) => (
            <div
              key={rem._id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{rem.title}</h3>
                <p className="text-gray-700 mb-4">{rem.description || 'No description provided.'}</p>
                <p className="text-sm text-gray-500">
                  ⏰ {formatDistanceToNow(new Date(rem.datetime), { addSuffix: true })}
                </p>
              </div>
              <button
                onClick={() => deleteReminder(rem._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition duration-200"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // You can customize the theme of the toast container
      />
    </div>
  );
}
