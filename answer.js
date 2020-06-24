
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThing.on('meet', function (name) {
//  console.log('Nice to meet you, ' + name + '.');
// });
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!'
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens

// Create constructor function
function EventedThing () {
  // Creating a child Object in the EventedThing Object instance
  this._listen = {};
}

// Create a method on the EventedThing Object prototype
EventedThing.prototype.on = function (event, cb) {
  // Adds the callback function to event key
  this._listen[event] = cb;
};

EventedThing.prototype.trigger = function (event, ...args) {
  // Create a callBack variable and assign the Object key to that variable
  var cb = this._listen[event];
  // Check if callBack is nit undefined and invoke the callBack, input args
  if (cb) cb(...args);
};
// REMOVE-END

module.exports = new EventedThing;
