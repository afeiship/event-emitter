import Es6Emitter from '../src';

class EventBus extends Es6Emitter {}

test('Event bus __listeners__ init an object', () => {
  const event = new EventBus();
  let result = 1;
  event.one('event-one', () => {
    result++;
  });
  event.one('event-one', () => {
    result++;
  });
  expect(event.__listeners__['event-one'].length).toBe(1);
});
