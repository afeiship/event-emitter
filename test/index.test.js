import Es6Emitter from '../src';

class EventBus extends Es6Emitter {}

test('Event bus __listeners__ init an object', () => {
  const event = new EventBus();
  expect(event.__listeners__).toEqual({});
});

test('Event bus __listeners__ destroy a null', () => {
  const event = new EventBus();
  event.destroy();
  expect(event.__listeners__).toBeNull();
});
