var EventEmitter = require('../index');

test('Event bus on/emit event', () => {
  const event = EventEmitter;
  let result = 0;
  event.on('event1', () => {
    result++;
  });

  event.emit('event1');
  expect(result).toBe(1);
  event.emit('event1');
  expect(result).toBe(2);
  event.emit('event1');
  expect(result).toBe(3);
});

test('Event emit with args', () => {
  const event = EventEmitter;
  let result = null;
  event.on('event1', (inSender, inData) => {
    result = inData.name;
  });
  event.emit('event1', { name: 'afei', git: 'https://github.com/afeiship' });
  expect(result).toBe('afei');
});
