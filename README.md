# event-emitter
> A simple event emitter

## install:
```shell
npm install -S afeiship/event-emitter --registry=https://registry.npm.taobao.org
```

## apis:
| name  | args                  | description                              |
|-------|-----------------------|------------------------------------------|
| mixin | target                | merge event methods to other object/clas |
| on    | name,handler,context  | register an event                        |
| off   | name,handler,context  | unregister an event                      |
| emit  | name,data             | fire an event                            |
| one   | name, handler,context | register only once                       |
| once  | name, handler,context | excute only once                         |

## usage:
```js
import EventEmitter from 'event-emitter';

// mixin to an object:
var EventObject = {};
EventEmitter.mixin(EventObject);

// mixin to a class:
var EventBus = function(){};
EventEmitter.mixin(EventBus);
```

## compatibility
- [x] browser (es5)
- [x] nodejs
- [x] wexin app
- [x] weixin h5
- [x] other
