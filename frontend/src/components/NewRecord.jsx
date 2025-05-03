import { useState } from "react";
import axios from "axios";

function NewRecord({ refreshRecords }) {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/records", formData);
    setFormData({ name: "", email: "", role: "" });
    refreshRecords();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        className="border p-2 mr-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2">
        Add
      </button>
    </form>
  );
}

export default NewRecord;
