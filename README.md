# event-emitter
> A simple event emitter

## install:
```shell
npm install -S afeiship/event-emitter --registry=https://registry.npm.taobao.org
```

## apis:
| name | args                  | description         |
|------|-----------------------|---------------------|
| on   | name,handler,context  | register an event   |
| off  | name,handler,context  | unregister an event |
| emit | name,data             | fire an event       |
| one  | name, handler,context | register only once  |
| once | name, handler,context | excute only once    |

## compatibility
- [x] browser (es5)
- [x] nodejs
- [x] wexin app
- [x] weixin h5
- [x] other
