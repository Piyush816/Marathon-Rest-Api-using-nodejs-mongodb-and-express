const express = require("express");
const router = new express.Router();
const Marathon = require("../models/marathonSchema");


// creating data
router.post("/marathon", async (req, res) => {
  try {
    const data = new Marathon(req.body);
    const rslt = await data.save();
    res.status(201).send(rslt);
  } catch (e) {
    res.status(400).send(e);
  }
});


// reading data
router.get("/marathon", async (req, res) => {
  try {
    const data = await Marathon.find().sort({rank:1});
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});


// reading indivisual data by id
router.get("/marathon/:id", async (req, res) => {
  try {
    const data = await Marathon.findById(req.params.id);
    res.send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});


// updating data by id
router.patch("/marathon/:id", async (req, res) => {
  try {
    const data = await Marathon.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});


// delete data by id
router.delete("/marathon/:id", async (req, res) => {
  try {
    const data = await Marathon.findByIdAndDelete(req.params.id);
    res.send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});















module.exports = router;
