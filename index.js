/**
 * Inherit the prototype methods from one constructor into others.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param (variable arity) {function} ctor Constructor functions which need to
 *     inherit the prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */

module.exports = {
  inherits: function (ctor, ctor, ctor, superCtor) {
    var superCtor = arguments[arguments.length-1];
    var ctors = arguments.length-1;
    while(--ctors > -1) inherit(arguments[ctors], superCtor);
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
