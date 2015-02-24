var util = require('./')
var Duplex = require('stream').Duplex

require('tape')('subclass w/ proper inheritence to constructors', function (t){

  t.plan(2)

  //now `self()` and `thr()` inherit from Duplex base class
  util.inherits( self, thr, Duplex );

  var s = new self()

  var tr = thru(function (chunk, _, next) {
    this.push(chunk)
    next()
  })

  t.ok(s instanceof Duplex, 'ensure `self()` inherited from Duplex base class')
  t.ok(tr instanceof Duplex, 'ensure `thr()` inherited from Duplex base class')

  function self(){
    Duplex.call(this)
  }

  function thru(fn){
    return new thr(fn)
  }

  function thr(fn){
    this._read = function(n){}
    this._write = fn
    Duplex.call(this)
  }
})
