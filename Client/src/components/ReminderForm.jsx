import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ReminderForm({ userId, onAdd }) {
  const [form, setForm] = useState({ title: '', description: '', datetime: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/reminders', {
        ...form,
        user_id: userId,
      });
      toast.success('✅ Reminder added!');
      onAdd(res.data);
      setForm({ title: '', description: '', datetime: '' });
      
    } catch (err) {
      toast.error('❌ Error adding reminder');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md rounded-2xl space-y-4 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center text-white">Add New Reminder</h2>

      <input
        name="title"
        placeholder="Enter title"
        required
        value={form.title}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        name="description"
        placeholder="Enter description"
        value={form.description}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="datetime-local"
        name="datetime"
        required
        value={form.datetime}
        onChange={handleChange}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
      >
        ➕ Add Reminder
      </button>
    </form>
  );
}
