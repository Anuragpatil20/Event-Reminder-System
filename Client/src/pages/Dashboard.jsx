import ReminderForm from '../components/ReminderForm';
import ReminderList from '../components/ReminderList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
  const userId = 'user123'; // Replace with dynamic user ID logic

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My Reminders</h1>
      <ReminderForm userId={userId} onAdd={() => {}} />
      
      <ToastContainer />
    </div>
  );
}
