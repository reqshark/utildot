/**
 * Inherit the prototype methods from one constructor into others.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype).
 *
 * @param (variable arity) {function} ctor any number of children Constructors.
 *   these functions all need to inherit from the same parent prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */

module.exports = {
  inherits: function () {
    var ctrs = arguments.length-1;
    while(--ctrs > -1) inherit(arguments[ctrs], arguments[arguments.length-1]);
  }
}

function inherit(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};
