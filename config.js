require('dotenv').config()

const { Pool } = require('pg')
// const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgres://jhimbkjt:GMim55FtIgzcrGREVYlNT-qyhe5korkR@isilo.db.elephantsql.com:5432/jhimbkjt`

const pool = new Pool({
  connectionString
})

pool.connect(err => {
    if(!err){
        console.log('DB connected');
    }else{
        console.log('DB not connected' +JSON.stringify(err, undefined, 2));
    }
    
})
module.exports =  pool 