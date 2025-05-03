import Datatable from "../components/Datatable";
import NewRecord from "../components/NewRecord";
import { useState } from "react";

function ManageRecords() {
  const [refresh, setRefresh] = useState(false);

  const refreshRecords = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Manage Records</h1>

      <NewRecord refreshRecords={refreshRecords} />

      <Datatable refresh={refresh} />
    </div>
  );
}

export default ManageRecords;
