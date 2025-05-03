import { useState, useEffect } from "react";
import axios from "axios";

function Datatable({ refresh }) {
  const [records, setRecords] = useState([]);
  const [editingRecordId, setEditingRecordId] = useState(null);
  const [editFormData, setEditFormData] = useState({ name: "", email: "", role: "" });

  const fetchRecords = async () => {
    const res = await axios.get('http://localhost:5000/api/records');
    setRecords(res.data);
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:5000/api/records/${id}`);
    fetchRecords();
  };

  const handleEditClick = (record) => {
    setEditingRecordId(record._id);
    setEditFormData({
      name: record.name,
      email: record.email,
      role: record.role,
    });
  };

  const handleCancelEdit = () => {
    setEditingRecordId(null);
  };

  const handleEditFormChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const saveEditedRecord = async (id) => {
    await axios.put(`http://localhost:5000/api/records/${id}`, editFormData);
    setEditingRecordId(null);
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, [refresh]);

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
            {editingRecordId === record._id ? (
              <>
                <td className="py-2">
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="py-2">
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="py-2">
                  <input
                    type="text"
                    name="role"
                    value={editFormData.role}
                    onChange={handleEditFormChange}
                    className="border p-1 rounded"
                  />
                </td>
                <td className="py-2 space-x-2">
                  <button
                    onClick={() => saveEditedRecord(record._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </td>
              </>
            ) : (
              <>
                <td className="py-2">{record.name}</td>
                <td className="py-2">{record.email}</td>
                <td className="py-2">{record.role}</td>
                <td className="py-2 space-x-2">
                  <button
                    onClick={() => handleEditClick(record)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteRecord(record._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Datatable;
