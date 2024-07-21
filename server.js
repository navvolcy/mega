const express = require('express')
const db = require('./db.json')
const app = express()
const port = 3000

app.get('/api/v1/login/:uvuId/:password/:uvuType', (req, res) => {

  const uvuId = req.params.uvuId
  const password = req.params.password
  const uvuType = req.params.uvuType
  const logins = db.login
            .filter(login => login.uvuId ===  uvuId)
            .filter (login => login.password == password)
            .filter(login => login.Type === uvuType )
            .map(function(login){
              return [login.uvuId, login.password, login.Type]
              
            })
  res.send(logins)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})