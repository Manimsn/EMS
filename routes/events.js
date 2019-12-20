const express = require('express');
const Router = express.Router();
const pool = require('../config');

Router.get("/", (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    pool.query('SELECT * FROM EMS', (err, row, field) =>{
        
        if(!err)
            if(row.rows.length > 0){
                res.send(row.rows)
            }else{
                res.send('No records found Based on your search')
            }
        else
            console.log(err)
    }) 
})

Router.get("/:price", (req, res) => {
    pool.query(`SELECT * FROM EMS where price <= ${req.params.price}`, (err, row, field) => {
        if(!err)
            if(row.rows.length > 0){
                res.send(row.rows)
            }else{
                res.send('No records found Based on your Price search')
            }
        else
            console.log(err)
    })
})

Router.get('/event/:even', (req, res) => {
    pool.query(`select * from ems where event like '%${req.params.even}%'`, (err, row, field) => {
        if(!err)
            if(row.rows.length > 0){
                res.send(row.rows)
            }else{
                res.send('No records found Based on your Events search')
            }
        else
            console.log(err)
    })
})

Router.get('/pincode/:pin', (req,res) => {
    pool.query(`select * from ems where  pincode = ${req.params.pin}`, (err, row, field) =>{
        if(!err)
            if(row.rows.length > 0){
                res.send(row.rows)
            }else{
                res.send('No records found Based on your Pincode search')
            }
        else
            console.log(err)
    })
})
module.exports = Router;