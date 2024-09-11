const express = require("express");
const db = require("./config/db");
const cors = require("cors");
const {
  PatientDetails,
  CreateTableWithColoumns,
  getData,
  addData,
} = require("./data");

const memberJourneyRouter = require("./routes/member-journal/memberJourney"); // Import the router
const reportRouter = require("./routes/reports-page/reportsPage");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Endpoint to insert patient data
app.post("/insert", async (req, res) => {
  try {
    for (const patientDetail of PatientDetails) {
      await db.query(addData(patientDetail)); // Adding each patient data to DB
    }
    res.status(200).send("Patient data inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to insert patient data");
  }
});

app.use('/', memberJourneyRouter); 
app.use('/', reportRouter);

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
