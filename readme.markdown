# utildot

# inherits(constructor, constructor, super)
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
require('utildotinherits')(Ctor, AnotherCtor, require('events').EventEmitter);

function Ctor(){}
function AnotherCtor(){}
```
