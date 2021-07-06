const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()
const config = require('./config.json')
const PORT = config.port
app.use(cors())//permite que as solicitacoes do ajax ignorem a politica de origem e acessem recurso de hosts remotos
const option = config.config_sql
//ligacao da base de dados
const connection = mysql.createConnection(option)
connection.connect((err) => {
    if(err) console.log(err)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

/*
Definir a rota de conteolo de requisicao, isto é, o Epress controlara a rota definida em funcao do programado
*/



/* 
Executar uma consulta.query(sqlString, callback) sqlString - a consulta a executar na BD. 
callback (function(err, rows, fields)) - err - erro no pocessamento da consulta 
rows - o retorno da consulta na BD
fields - o hover retorno, é a informacao sobre os campos retornados
*/
/*app.get('/', (req, res) =>{
    try{
       connection.query(`SELECT * FROM user`, (err, rows, fields) => {
           if(err) throw err
           res.json({resultado : rows})
       })
    }catch(e){
        if(e) res.send(err)
    }
})
*/


app.get('/', (req, res) =>{
    connection.query(`SELECT * FROM user`, (err, rows, fields) => {
        !err ? res.json({resultado : rows}) : res.send(err)
    })
})

app.get('/test', (req, res) =>{
    connection.query(`SELECT * FROM test`, (err, rows, fields) => {
        !err ? res.json({resultado : rows}) : res.send(err)
    })
})

app.get('/user', (req, res) =>{
    connection.query(`SELECT * FROM user`, (err, rows, fields) => {
        !err ? res.json({resultado : rows}) : res.send(err)
    })
})