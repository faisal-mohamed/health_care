const express = require("express");
const db = require("./db");
const cors = require("cors");
const {
  PatientDetails,
  CreateTableWithColoumns,
  // addDataQuery,
  getData,
  addData,
} = require("./data");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json()); // Add this middleware to parse JSON bodies

// Endpoint to insert patient data
app.post("/insert", async (req, res) => {
  try {
    for (const patientDetail of PatientDetails) {
      await db.query(addData(patientDetail));
    }
    res.status(200).send("Patient data inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to insert patient data");
  }
});

// Endpoint to search for patients by name
app.get("/search", async (req, res) => {
  const { name } = req.query;
  const SearchQuery = `SELECT * FROM PatientDetails WHERE memberName LIKE $1`;
  console.log("name: ", name);
  try {
    const response = await db.query(SearchQuery, [`%${name}%`]);
    res.status(200).send(response.rows);
    console.log("Query executed successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to execute query");
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
