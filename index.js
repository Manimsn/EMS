const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
const eventsRoute = require('./routes/events')

const app = express()

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))



app.use('/EventsRoute',eventsRoute)

app.all("*", (req, res) => {
  res.status(404).send(`Please try giving "/" or "events/lig" or "price/35000" or "/pincode"`);
});

app.listen(3000, () => {
  console.log(`Server listening`)
})