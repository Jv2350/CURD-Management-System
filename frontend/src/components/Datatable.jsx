import { useState, useEffect } from "react";
import axios from "axios";

function Datatable() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const res = await axios.get("http://localhost:5000/api/records");
    setRecords(res.data);
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:5000/api/records/${id}`);
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <table className="min-w-full bg-white">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2">Name</th>
          <th className="py-2">Email</th>
          <th className="py-2">Role</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record._id} className="text-center">
            <td className="py-2">{record.name}</td>
            <td className="py-2">{record.email}</td>
            <td className="py-2">{record.role}</td>
            <td className="py-2 space-x-2">
              <button
                className="bg-red-500 text-white px-2 py-1"
                onClick={() => deleteRecord(record._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Datatable;
