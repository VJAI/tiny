# ƚιɳყ
A tiny library simplifies building web components using a base class and small set of decorators.

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

`create(name, options)` - Create new element and returns it. <br><br>
`$(selector, el = this)` - Queries and returns the element that matches the passed CSS selector. <br><br>
`$$(selector, el = this)` - Queries and returns the elements that matches the passed CSS selector. <br><br>
`addClass(classes, el = this)` - Adds single or multiple classes. <br><br>
`removeClass(classes, el = this)` - Removes single or multiple classes. <br><br>
`clearClasses(el = this)` - Clear all classes. <br><br>
`toggleClass(sourceCls, targetCls, el = this)` - Toggles source css classes with the target. <br><br>
`getAttr(name, el = this)` - Returns the attribute value of the element. <br><br>
`setAttr(obj, el = this)` - Sets attributes for element from the passed object. <br><br>
`removeAttr(attrs, el = this)` - Removes the passed attributes from the element. <br><br>
`getData(name, el = this)` - Returns the value of the data attribute. <br><br>
`setData(obj, el = this)` - Sets object of data attributes. <br><br>
`getStyle(name, el = this)` - Returns the passed style's value. <br><br>
`addStyle(styles, el = this)` - Add passed styles. <br><br>
`clearStyles(el = this)` - Clears the passed styles. <br><br>
`removeStyles(styles, el = this)` - Removes the passed style(s). <br><br>
`getChild(index, parent = this)` - Returns the child from the passed index. <br><br>
`addChildren(children, parent = this)` - Inserts the passed elements as children. <br><br>
`removeChildren(el = this)` - Removes all the children. <br><br>
`updateHtml(html, el = this)` - Updates html of the element. <br><br>
`show(el = this)` - Shows the element. <br><br>
`hide(el = this)` - Hides the element. <br><br>
`on(eventName, handler, el = this)` - Subscribes to the event. <br><br>
`off(eventName, handler, el = this)` - Un-subscribes from the event. <br><br>

#### Life-cycle hooks

`onConnected()` - Native hook.<br><br>
`onDisconnected()` - Native hook.<br><br>
`onChanges(changes)` - Called initially and whenever there is a change in inputs.<br><br>


### `element(name, tpl, shadow = false)` decorator

Decorator that helps to register a class as custom web element.


### `input(attribute = false, dataType = 'string')` decorator

Decorator that marks the applied property as an input.


### `query(selector)` decorator

Decorator that helps to query and return DOM element(s) on accessing the applied property.


### `queryAll(selector)` decorator

Decorator that helps to query and return DOM element(s) on accessing the applied property.


### `handle(eventName, element = 'self', all = false)` decorator

Decorator that helps to bind a DOM event with a function.


## LICENSE

MIT


## Contact

vijay#dot#prideparrot#at#gmail.com
