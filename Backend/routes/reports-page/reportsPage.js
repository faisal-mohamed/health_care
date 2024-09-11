const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();

router.post('/download-report', (req, res) => {
  const fileName = req.body.file; 
  const filePath = path.resolve(__dirname, 'files', fileName); // Build the file path safely

  console.log("filePath: ", filePath);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    // Download the file
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Error during file download', err);
        res.status(500).send('Error downloading file');
      }
    });
  } else {
    // Handle the case where the file doesn't exist
    res.status(404).send('File not found');
  }
});

module.exports = router;
