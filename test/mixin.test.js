var EventEmitter = require('../index');

test('EVent mixin to object/class', () => {
  var Person = function() {};
  var obj = {};
  var EventCls = EventEmitter.mixin(Person);
  var EventObj = EventEmitter.mixin(obj);

  // console.log(EventObj, Object.keys(EventObj));

  expect(EventObj).toEqual(EventCls.prototype);
  expect(Object.keys(EventObj)).toEqual(['on', 'off', 'emit', 'one', 'once']);
  expect(Object.keys(EventObj)).toEqual(Object.keys(EventCls.prototype));
});
