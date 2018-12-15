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

test('Create an es5 class event bus:', () => {
  var EventBus = function() {};
  var sum = 0;
  EventEmitter.mixin(EventBus);

  var $event = new EventBus();
  $event.on('add', (_, inArgs) => {
    if (inArgs) {
      sum += inArgs;
    } else {
      sum++;
    }
  });

  $event.emit('add');
  $event.emit('add', 2);

  expect(sum).toBe(3);
});

test('Create an es6 class event bus:', () => {
  var EventBus = class {};
  var sum = 0;
  EventEmitter.mixin(EventBus);

  var $event = new EventBus();
  $event.on('add', (_, inArgs) => {
    if (inArgs) {
      sum += inArgs;
    } else {
      sum++;
    }
  });

  $event.emit('add');
  $event.emit('add', 7);

  expect(sum).toBe(8);
});
