'use strict';
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
const lib_1 = require('../lib');
let TodoApp = class TodoApp extends lib_1.TinyElement {
  onSubmit(evt) {
    evt.preventDefault();
    if (!this.input.value) {
      return;
    }
    const todo = this.create('todo-item', {
      props: {
        item: this.input.value
      }
    });
    this.addChildren([todo], this.todosContainer);
    this.input.value = '';
  }
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
      `<div class="container">
  <form>
    <input name="todo" placeholder="New Todo" />
    <button type="submit">Add</button>
  </form>
  <div class="list">
  </div>
</div>`
    )
  ],
  TodoApp
);
let Todo = class Todo extends lib_1.TinyElement {
  onChanges(changes) {
    if (changes.has('item')) {
      this.updateHtml(this.item, this.spanEl);
    }
  }
  onDelete(evt) {
    evt.preventDefault();
    this.remove();
  }
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
      `<div>
  <span class="text"></span>
  <button type="button" style="font-size:10px" class="delete">❌</button>
</div>`
    )
  ],
  Todo
);
// document.addEventListener('DOMContentLoaded', () => {
//   const board = document.createElement('todo-app');
//   document.body.appendChild(board);
// });
exports.default = {
  component: TodoApp,
  title: 'Examples/ToDo'
};
const List = () => `<todo-app/>`;
exports.List = List;
//# sourceMappingURL=element.stories.js.map
