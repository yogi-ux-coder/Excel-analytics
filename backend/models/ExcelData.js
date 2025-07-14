const mongoose = require('mongoose');

const excelDataSchema = new mongoose.Schema({
  data: {
    type: Array,
    required: true,
  },
  uploadedBy: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('ExcelData', excelDataSchema);
