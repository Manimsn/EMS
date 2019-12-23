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
                res.send('No records found')
            }
        else
            console.log(err)
    }) 
})

// Routes to return that are less than or equal to the given price
Router.get("/Price/:price", (req, res) => {
    pool.query(`SELECT * FROM EMS where price <= ${req.params.price}`, (err, row, field) => {
        if(!err)
            if(row.rows.length > 0){
                res.send(row.rows)
            }else{
                res.json('No records found based on the given Price')
            }
        else
            console.log(err)
    })
})

// Routes to return event matching the given keyword
Router.get('/events/:event', (req, res) => {
        // console.log(req.params.even.toLowerCase())
        pool.query(`select * from ems where lower(event) like '%${req.params.event.toLowerCase()}%'`, (err, row, field) => {
            if(!err)
                if(row.rows.length > 0){
                    res.send(row.rows)
                }else{
                    res.send('No records found based on the given Event')
                }
            else
                console.log(err)
        })
    
})

// Routes to return whether the event is there or not
Router.get('/pincode/:pin', (req,res) => {
    
        pool.query(`select * from ems where pincode = ${req.params.pin}`, (err, row, field) =>{
            if(!err)
                if(row.rows.length > 0){
                    res.send(`You have this below event scheduled on ${row.rows[0].timing}
                    And the organizer for this event is ${row.rows[0].organiser}
                    It is a Light Music Party costs ${row.rows[0].price} per head
                    and the location is ${row.rows[0].location}
                    Thank You for valuable time you spend find our events
                    `)
                    // res.send(row.rows)
                    // console.log(row.rows[0].pincode)
                }else{
                    res.send('No Events is organised for your pincode location')
                }
            else
                console.log(err)
        })
})

  
module.exports = Router;