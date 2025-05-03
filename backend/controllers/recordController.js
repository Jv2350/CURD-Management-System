const Record = require("../models/Record");

const getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

const createRecord = async (req, res) => {
  const record = new Record(req.body);
  await record.save();
  res.json(record);
};

const updateRecord = async (req, res) => {
  const updatedRecord = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedRecord);
};

const deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Record deleted" });
};

module.exports = { getRecords, createRecord, updateRecord, deleteRecord };
