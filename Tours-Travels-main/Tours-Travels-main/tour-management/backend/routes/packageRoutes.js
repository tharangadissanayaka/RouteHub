import express from "express";
import db from "../config/db.js";

const router = express.Router();

// Fetch all tour packages
router.get("/packages", async (req, res) => {
  try {
    const [results] = await db.execute("SELECT * FROM packages");
    //   console.log('Tours Fetched:', results);
    res.json(results);
  } catch (error) {
    console.error("Error fetching tours:", error);
    res.status(500).json({ error: error.message });
  }
});

// Add a new tour package
router.post("/packages", (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO packages (title, description, price) VALUES (?, ?, ?)";
  db.query(sql, [title, description, price], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Tour added successfully", id: result.insertId });
  });
});

// Update a tour package
router.put("/packages/:id", async (req, res) => {
  const { title, description, price } = req.body;
  const { id } = req.params;

  try {
    await db.query(
      "UPDATE packages SET title = ?, description = ?, price = ? WHERE id = ?",
      [title, description, price, id]
    );
    res.json({ message: "Tour updated successfully" });
  } catch (error) {
    console.error("Error updating tour:", error);
    res.status(500).json({ error: error.message });
  }
});

// Delete a tour by ID
router.delete("/packages/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM packages WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Tour not found" });
    }
    res.json({ message: "Tour deleted successfully" });
  } catch (error) {
    console.error("Error deleting tour:", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
