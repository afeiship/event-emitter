import Es6Emitter from '../src';

class EventBus extends Es6Emitter {}

test('Event bus on/emit event', () => {
  const event = new EventBus();
  let result = 0;
  event.on('event1', () => {
    result++;
    // console.log('result is:->', result);
  });

  expect(event.__listeners__['event1'].length).toBe(1);
});

test('Event bus on will return destory', () => {
  const event = new EventBus();
  let result = 0;
  const res = event.on('event1', () => {
    result++;
    // console.log('result is:->', result);
  });
  event.emit('event1');
  expect(result).toBe(1);

  // off events:
  res.destroy();

  //fire but the event has offed
  event.emit('event1');
  expect(result).toBe(1);
});

test('register multi event', () => {
  const event = new EventBus();
  let result = 0;

  event.on('ev1', () => {
    result++;
  });
  event.on('ev1', () => {
    result++;
  });
  event.on('ev1', () => {
    result += 10;
  });

  expect(event.__listeners__['ev1'].length).toBe(3);
  event.emit('ev1');
  expect(result).toBe(12);
});
