import { TinyElement, element, query, handle, input } from './src';

@element(
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
class TodoApp extends TinyElement {
  @query('.list')
  todosContainer;

  @query('input')
  input;

  @handle('submit', 'form')
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
}

@element(
  'todo-item',
  `<div>
  <span class="text"></span>
  <button type="button" style="font-size:10px" class="delete">❌</button>
</div>`
)
class Todo extends TinyElement {
  @input(true)
  item;

  @query('.text')
  spanEl;

  @query('.delete')
  deleteEl;

  onChanges(changes) {
    if (changes.has('item')) {
      this.updateHtml(this.item, this.spanEl);
    }
  }

  @handle('click', '.delete')
  onDelete(evt) {
    evt.preventDefault();
    this.remove();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const board = document.createElement('todo-app');
  document.body.appendChild(board);
});
