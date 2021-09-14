# tiny
A tiny library simplifies building web components using a base class and small set of decorators!

## Installation

```shell
npm i tiny.element.js --save
```

## Example

```js
import { TinyElement, element, query, handle, input } from 'tiny.element.js';

@element('todo-app',
`<div class="container">
  <form>
    <input name="todo" placeholder="New Todo" />
    <button type="submit">Add</button>
  </form>
  <div class="list">
  </div>
</div>`)
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
        item: this.input.value,
        parent: this
      }
    });

    this.addChildren([todo], this.todosContainer);
    this.input.value = '';
  }
}

@element('todo-item',
`<div>
  <span class="text"></span>
  <button type="button" style="font-size:10px" class="delete">❌</button>
</div>`)
class Todo extends TinyElement {

  @input(true)
  item;

  @input()
  parent;

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
```

## API

### `TinyElement` (Base Class)

Contains methods to perform DOM operations.

`create(name, options)` - Create new element and returns it. <br>
`$(selector, el = this)` - Queries and returns the element that matches the passed CSS selector. <br>
`$$(selector, el = this)` - Queries and returns the elements that matches the passed CSS selector. <br>
`addClass(classes, el = this)` - Adds single or multiple classes. <br>
`removeClass(classes, el = this)` - Removes single or multiple classes. <br>
`clearClasses(el = this)` - Clear all classes. <br>
`toggleClass(sourceCls, targetCls, el = this)` - Toggles source css classes with the target. <br>
`getAttr(name, el = this)` - Returns the attribute value of the element. <br>
`setAttr(obj, el = this)` - Sets attributes for element from the passed object. <br>
`removeAttr(attrs, el = this)` - Removes the passed attributes from the element. <br>
`getData(name, el = this)` - Returns the value of the data attribute. <br>
`setData(obj, el = this)` - Sets object of data attributes. <br>
`getStyle(name, el = this)` - Returns the passed style's value. <br>
`addStyle(styles, el = this)` - Add passed styles. <br>
`clearStyles(el = this)` - Clears the passed styles. <br>
`removeStyles(styles, el = this)` - Removes the passed style(s). <br>
`getChild(index, parent = this)` - Returns the child from the passed index. <br>
`addChildren(children, parent = this)` - Inserts the passed elements as children. <br>
`removeChildren(el = this)` - Removes all the children. <br>
`updateHtml(html, el = this)` - Updates html of the element. <br>
`show(el = this)` - Shows the element. <br>
`hide(el = this)` - Hides the element. <br>
`on(eventName, handler, el = this)` - Subscribes to the event. <br>
`off(eventName, handler, el = this)` - Un-subscribes from the event. <br>

### `element` decorator



### `input` decorator

### `query` decorator

### `handle` decorator




