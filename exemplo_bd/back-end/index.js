const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./config.json')
const mysql = require('mysql')
const PORT = config.port
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'exemplo_react_bd'
})
app.use(cors())


app.get('/getClients', async (req, res) => {
    console.log('test')
    connection.query('SELECT * FROM clientes', (err, rows, fields) => {
        if(err) console.log(err)
        res.end(JSON.stringify({clientes : rows}))
    })
    
})

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`)
})
