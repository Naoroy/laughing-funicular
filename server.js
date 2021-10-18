const express = require('express')

const server = express()
const PORT = process.env.PORT || 3001

server.get('/', function(req, res) { res.json({ msg: "Hello FTP" }) })

if(!module.parent) {
  server.listen(PORT)
}
module.exports = server
