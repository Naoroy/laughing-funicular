const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server.js')

chai.use(chaiHttp)

describe('GET / ', function () {
  it('Should return a message object', function() {
    chai.request(server).get('/').end(function (err, res) {
      const response = res.body
      response.should.be.a('object')
      response.msg.should.equal('Hello FTP')
    })
  })
})
