# utildot

### inherits(constructor, constructor, super)

function subclasses a super constructor across a variable arity of constructors

instead of doing this:

```js
var util = require('util');
var EventEmitter = require('events').EventEmitter;

util.inherits(Ctor, EventEmitter);
util.inherits(AnotherCtor, EventEmitter);

function Ctor(){}
function AnotherCtor(){}
```

just do:

```js
var util = require('utildot')

util.inherits(Ctor, AnotherCtor, require('events').EventEmitter);

function Ctor(){}
function AnotherCtor(){}
//... inherit down to any number of constructors passed before the superCtor
```

### install:

```bash
$ npm install
```

### test:

```bash
$ npm t
```
