var EventEmitter = require('../index');

test('Event bus __listeners__ init an object', () => {
  const event = EventEmitter;
  let result = 1;
  event.one('event-one', () => {
    result++;
  });
  event.one('event-one', () => {
    result++;
  });
  expect(event.__listeners__['event-one'].length).toBe(1);
});
