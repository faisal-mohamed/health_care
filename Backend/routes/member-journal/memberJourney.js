const express = require('express');

require('dotenv').config();


const db = require('../../config/db')
const router = express.Router();

router.get("/search", async (req, res) => {

    const { name } = req.query;
    const nameAsInt = parseInt(name.trim(), 10);
  
    let searchQuery;
    let queryParams;
  
    if (!isNaN(nameAsInt)) {
      // Search by integer if nameAsInt is valid
      searchQuery = `SELECT * FROM PatientDetails WHERE memberid = $1;`;
      queryParams = [nameAsInt];
    } else {
      // Search by name if nameAsInt is not valid
      searchQuery = `SELECT * FROM PatientDetails
                     WHERE LOWER(REPLACE(membername, ' ', '')) LIKE LOWER(REPLACE($1, ' ', ''));`;
      queryParams = [`%${name}%`];
    }
  
    try {
      const response = await db.query(searchQuery, queryParams);
      res.status(200).send(response.rows);
      console.log("Query executed successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to execute query");
    }
});

module.exports = router;