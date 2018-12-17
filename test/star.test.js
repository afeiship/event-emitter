var EventEmitter = require('../index');

test('Event bus on emit *', () => {
  const event = EventEmitter;
  let result = 0;
  let total = 0;
  let events = [];
  event.on('event1', () => {
    result++;
  });

  event.on('event2', () => {
    result++;
  });

  event.on('event3', () => {
    result++;
  });

  event.on('*', (_, data) => {
    events.push(data.type);
    total++;
  });

  event.emit('event1');
  event.emit('event2');
  event.emit('event3');

  // 一般不会 emit *， 没有意义

  // console.log(event, result, total);

  expect(result).toBe(3);
  expect(total).toBe(3);
  expect(events).toEqual(['event1', 'event2', 'event3']);
});
