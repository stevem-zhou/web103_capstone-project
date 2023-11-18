const express = require("express");
const reviewRouter = express.Router();

const pool = require("../config/database.js");

reviewRouter.get("/getReviews", async (req, res) => {
  try {
    const reviewData = await pool.query(`SELECT * from reviews;`);
    console.log(reviewData);
    res.status(200).json({
      status: "success",
      data: reviewData.rows,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

reviewRouter.post("/addReviews", async (req, res) => {
  try {
    console.log("LOOK HERE", req.body)
    const { reviewer, review, date, course_name } = req.body;
    console.log("LOOK HERE", req.body)
    const reviewData = await pool.query(
      `INSERT INTO reviews (reviewer, review, date, course_name)
      VALUES ($1, $2, $3, $4);`,
      [reviewer, review, date, course_name]
    );
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

reviewRouter.delete("/delete/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const reviewData = await pool.query(
        `DELETE FROM reviews WHERE id = $1`, [id]
      );
      res.status(200).json({
        status: "success",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        error: err,
      });
    }
  });

module.exports = reviewRouter;
