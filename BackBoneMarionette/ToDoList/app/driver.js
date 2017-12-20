var Marionette = require('backbone.marionette');
var TodoView = require('./views/layout');
var ToDoModel = require('./models/todo');


var initialData = [
  {assignee: 'Scott', text: 'Write a book about Marionette'},
  {assignee: 'Andrew', text: 'Do some coding'}
];

var app = new Marionette.Application({
  onStart: function(options) {
    var todo = new TodoView({
      collection: new Backbone.Collection(options.initialData),
      model: new ToDoModel()
    });
    todo.render();
    todo.triggerMethod('show');
  }
});

app.start({initialData: initialData});