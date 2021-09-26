'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.List = void 0;
var lib_1 = require('../lib');
var TodoApp = /** @class */ (function (_super) {
  __extends(TodoApp, _super);
  function TodoApp() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TodoApp.prototype.onSubmit = function (evt) {
    evt.preventDefault();
    if (!this.input.value) {
      return;
    }
    var todo = this.create('todo-item', {
      props: {
        item: this.input.value
      }
    });
    this.addChildren([todo], this.todosContainer);
    this.input.value = '';
  };
  __decorate(
    [(0, lib_1.query)('.list')],
    TodoApp.prototype,
    'todosContainer',
    void 0
  );
  __decorate([(0, lib_1.query)('input')], TodoApp.prototype, 'input', void 0);
  __decorate(
    [(0, lib_1.handle)('submit', 'form')],
    TodoApp.prototype,
    'onSubmit',
    null
  );
  TodoApp = __decorate(
    [
      (0, lib_1.element)(
        'todo-app',
        '<div class="container">\n  <form>\n    <input name="todo" placeholder="New Todo" />\n    <button type="submit">Add</button>\n  </form>\n  <div class="list">\n  </div>\n</div>'
      )
    ],
    TodoApp
  );
  return TodoApp;
})(lib_1.TinyElement);
var Todo = /** @class */ (function (_super) {
  __extends(Todo, _super);
  function Todo() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Todo.prototype.onChanges = function (changes) {
    if (changes.has('item')) {
      this.updateHtml(this.item, this.spanEl);
    }
  };
  Todo.prototype.onDelete = function (evt) {
    evt.preventDefault();
    this.remove();
  };
  __decorate([(0, lib_1.input)(true)], Todo.prototype, 'item', void 0);
  __decorate([(0, lib_1.query)('.text')], Todo.prototype, 'spanEl', void 0);
  __decorate([(0, lib_1.query)('.delete')], Todo.prototype, 'deleteEl', void 0);
  __decorate(
    [(0, lib_1.handle)('click', '.delete')],
    Todo.prototype,
    'onDelete',
    null
  );
  Todo = __decorate(
    [
      (0, lib_1.element)(
        'todo-item',
        '<div>\n  <span class="text"></span>\n  <button type="button" style="font-size:10px" class="delete">\u274C</button>\n</div>'
      )
    ],
    Todo
  );
  return Todo;
})(lib_1.TinyElement);
// document.addEventListener('DOMContentLoaded', () => {
//   const board = document.createElement('todo-app');
//   document.body.appendChild(board);
// });
exports.default = {
  component: TodoApp,
  title: 'Examples/ToDo'
};
var List = function () {
  return '<todo-app/>';
};
exports.List = List;
//# sourceMappingURL=element.stories.js.map
