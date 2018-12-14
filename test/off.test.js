import Es6Emitter from '../src';

class EventBus extends Es6Emitter {}

test('Event bus on/emit event', () => {
  const event = new EventBus();
  let result = 0;
  const res = event.on('event1', () => {
    result++;
  });

  event.emit('event1');
  expect(result).toBe(1);

  res.destroy()
  event.emit('event1');
  expect(result).toBe(1);
  event.emit('event1');
  expect(result).toBe(1);
});
