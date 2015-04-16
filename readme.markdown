# utildot
line saving javascript inheritence.

### inherits(*constructor*, *constructor*, *super*)

* <strong>grab a super constructor</strong>
* <strong>apply it to some child constructors using a variadic version of `util.inherits`</strong>
* <strong>the last parameter given is the super constructor</strong>
* <strong>any number of constructors given sooner inherit from a prototype of the super constructor</strong>

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
$ npm i utildot
```

### test:

```bash
$ npm t
```
