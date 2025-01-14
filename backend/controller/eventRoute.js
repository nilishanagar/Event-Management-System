const express = require("express");
const User = require("../model/userSchema");
const EventSchema = require("../model/eventSchema");

const eventRoute = express.Router();
const mongoose = require("mongoose");

// --------------------------------------------------------------------------------
// User
eventRoute.get("/user-list", (req,res) => {
    User.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.post("/create-user", (req,res) => {
    User.create(req.body, (err,data) => {
        // console.log("create user",req.body);
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.route("/check-user/:uname")
.get((req, res) => {
    User.findOne({username: req.params.uname}, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);

    })
})

eventRoute.route("/update-user/:id")
.get((req, res) => {
    User.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req, res) => {
    User.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.delete("/delete-user/:id",(req,res)=>{
    User.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})


// -----------------------------------------------------------------------------------------
// Events
eventRoute.get("/event-list", (req,res) => {
    EventSchema.find((err, data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.route("/check-event/:id")
.get((req, res) => {
    EventSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.post("/create-event", (req,res) => {
    
    EventSchema.create(req.body, (err,data) => {
        // console.log("Request payload received at byyy backend:", req.body); 
        if(err)
            return err;
        else
            res.json(data);
    })
})

eventRoute.route("/update-event/:id")
.get((req, res) => {
    EventSchema.findById(mongoose.Types.ObjectId(req.params.id), (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req, res) => {
    EventSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set:req.body},
    (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
eventRoute.delete("/delete-event/:id",(req,res)=>{
    EventSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = eventRoute;