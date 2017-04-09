const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function() {
  it ('se quitan los ar', function() {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
})
