var global = global || this || window || Function('return this')();
var EVENT_PROPS = ['on', 'off', 'emit', 'one', 'once'];
var FUNC = 'function';
var EventEmitter = {
  mixin: function(inTarget) {
    for (var i = 0; i < EVENT_PROPS.length; i++) {
      var item = EVENT_PROPS[i];
      if (typeof inTarget === FUNC) {
        inTarget.prototype[item] = EventEmitter[item];
      } else {
        inTarget[item] = EventEmitter[item];
      }
    }
    return inTarget;
  },
  on: function(inName, inHandler, inContext) {
    var self = this;
    var map = (this.__listeners__ = this.__listeners__ || {});
    var listeners = (map[inName] = map[inName] || []);
    listeners.push({
      sender: this,
      handler: inHandler,
      context: inContext
    });
    return {
      destroy: function() {
        self.off(inName, inHandler, inContext);
      }
    };
  },
  off: function(inName, inHandler, inContext) {
    var map = (this.__listeners__ = this.__listeners__ || {});
    if (inName in map === false) return;

    var listeners = map[inName];
    var _listeners = listeners.slice(0);
    if (inHandler) {
      for (var i = 0; i < _listeners.length; i++) {
        var listener = _listeners[i];
        if (listener.handler === inHandler && (!inContext || listener.context === inContext)) {
          listeners.splice(i, 1);
        }
      }
    } else {
      listeners.length = 0;
    }
  },
  emit: function(inName, inData) {
    var map = (this.__listeners__ = this.__listeners__ || {});
    if (inName in map === false) return;

    var dispatch = function(inType, inListeners) {
      var listeners = (inListeners || []).slice();
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        var context = listener.context;
        var sender = listener.sender;
        var handler = listener.handler;
        if (handler.call(context || sender, sender, inData) === false) {
          break;
        }
        if (handler.__once__) {
          this.off(inType, handler, context);
        }
      }
    };

    if (inName !== '*') {
      dispatch(inName, map[inName]);
    }
    dispatch(inName, map['*']);
  },
  one: function(inName, inHandler, inContext) {
    var map = (this.__listeners__ = this.__listeners__ || {});
    if (!map[inName]) {
      return this.on(inName, inHandler, inContext);
    }
  },
  once: function(inName, inHandler, inContext) {
    inHandler.__once__ = true;
    return this.on(inName, inHandler, inContext);
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EventEmitter;
} else {
  if (typeof define === 'function' && define.amd) {
    define([], function() {
      return EventEmitter;
    });
  } else {
    global.EventEmitter = EventEmitter;
  }
}
