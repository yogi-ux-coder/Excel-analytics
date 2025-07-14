const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const ExcelData = require('../models/ExcelData'); 

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST: Upload Excel and save with uploadedBy
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    console.log("📨 File received:", req.file);          // Add this
    console.log("👤 Uploaded by:", req.query.user);      // Add this

    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    const newExcel = new ExcelData({
      data: sheetData,
      uploadedBy: req.query.user || 'anonymous',
    });

    await newExcel.save();
    res.status(200).json({ message: 'Excel uploaded & parsed successfully!' });

  } catch (err) {
    console.error('Upload error:', err.message);
    res.status(500).json({ message: 'Failed to upload Excel', error: err.message });
  }
});

// GET: Latest Excel data
router.get('/data', async (req, res) => {
  const {user} = req.query;

  if(!user){
    return res.status(400).json({message:"Missing user"});
  }

  try {
    const latest = await ExcelData.findOne({uploadedBy : user}).sort({ createdAt: -1});

    if(!latest) {
      return res.status(404).json({ message : "No data found"});
    }

    res.json({data: latest.data});
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message});
  }
});

module.exports = router;
