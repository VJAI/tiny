<p align="center">
  <img src="https://github.com/VJAI/tiny/blob/main/tiny.png" style="width: 200px" />
</p>

# ƚιɳყ

A tiny library (~20kb minified) simplifies building web components using a base class and small set of decorators.

## Installation

```shell
npm i @tinyweb/core --save
```

## Example

A simple todo app.

```js
import { TinyElement, ElementChanges, element, query, handle, input } from '@tinyweb/core';

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
  todosContainer: HTMLDivElement;

  @query('input')
  input: HTMLInputElement;

  @handle('submit', 'form')
  onSubmit(evt: Event) {
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
  item: string;

  @query('.text')
  spanEl: HTMLSpanElement;

  @query('.delete')
  deleteEl: HTMLButtonElement;

  onChanges(changes: ElementChanges) {
    if (changes.has('item')) {
      this.updateHtml(this.item, this.spanEl);
    }
  }

  @handle('click', '.delete')
  onDelete(evt: Event) {
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

### Decorators

#### `element(name: string, tpl: string, shadow: boolean = false)` decorator
Decorator that helps to register a class as custom web element. <br><br>

#### `input(attribute = false, dataType = AttributeValueDataType.STRING)` decorator
Decorator that marks the applied property as an input.
The supported values of `AttributeValueDataType` are `STRING`, `NUMBER` and `BOOLEAN`.<br><br>

#### `query(selector: string, parent?: string)` decorator
Decorator that helps to query and return DOM element(s) on accessing the applied property. <br><br>

#### `queryAll(selector: string, parent?: string)` decorator
Decorator that helps to query and return DOM element(s) on accessing the applied property. <br><br>

#### `handle(eventName: string, element: string = 'self', all = false)` decorator
Decorator that helps to bind a DOM event with a function.
The default value of element is "self" and you can pass any valid child element selector to it. <br><br>

### `TinyElement` (Base Class)

Contains methods to perform DOM operations.

#### `create<T extends HTMLElement>(name: string, options: TinyElementCreateOptions): T`
Create new element and returns it. 
The `TinyElementCreateOptions` interface looks like below,

```ts
interface TinyElementCreateOptions {
  /**
   * Element id.
   */
  id?: string;

  /**
   * CSS class(es).
   */
  cls?: string | Array<string>;

  /**
   * Properties.
   */
  props?: KeyValue;

  /**
   * DOM attributes.
   */
  attrs?: KeyValue;

  /**
   * Styles.
   */
  styles?: KeyValue;

  /**
   * Events.
   */
  events?: EventMap;

  /**
   * Parent element.
   */
  parent?: string | TinyElement | HTMLElement;

  /**
   * Inner HTML.
   */
  html?: string;

  /**
   * Children.
   */
  children?: Array<{ name: string; options: TinyElementCreateOptions }>;
}
```

#### `$<T extends HTMLElement>(selector: string, el: UIElement = this): T`
Queries and returns the element that matches the passed CSS selector. 
`UIElement` is a composite type and it can be `string`, `TinyElement` or `HTMLElement`. <br><br>

#### `$$<T extends HTMLElement>(selector: string, el: UIElement = this): NodeListOf<T>`
Queries and returns the elements that matches the passed CSS selector. <br><br>

#### `hasClass(cls: string, element: UIElement = this): boolean`
Returns `true` if the element has the passed CSS class name. <br><br>

#### `addClass(classes: string | Array<string>, el: UIElement = this): TinyElement`
Adds single or multiple classes. <br><br>

#### `removeClass(classes: string | Array<string>, el: UIElement = this): TinyElement`
Removes single or multiple classes. <br><br>

#### `clearClasses(el: UIElement = this): TinyElement`
Clear all classes. <br><br>

#### `toggleClass(cls: string | Array<string>, el: UIElement = this, state?: boolean): TinyElement`
Toggles source css classes with the target. <br><br>

#### `replaceClass(sourceCls: string | Array<string>, targetCls: string | Array<string>, element: UIElement = this): TinyElement`
Replaces source css classes with the target css classes. <br><br>

#### `getAttr(name: string, el: UIElement = this): string`
Returns the attribute value of the element. <br><br>

#### `setAttr(obj: KeyValue, el: UIElement = this): TinyElement`
Sets attributes for element from the passed object. 
The `KeyValue` interface refers an object structure and it looks as below,

```ts
interface KeyValue {
  [key: string]: any;
}
```

#### `removeAttr(attrs: string | Array<string>, el: UIElement = this): TinyElement`
Removes the passed attributes from the element. <br><br>

#### `getData(name: string, el: UIElement = this): string`
Returns the value of the data attribute. <br><br>

#### `setData(obj: KeyValue, el: UIElement = this): string`
Sets object of data attributes. <br><br>

#### `getStyle(name: string, el: UIElement = this): string`
Returns the passed style's value. <br><br>

#### `hasStyle(style: string, element: UIElement = this): boolean`
Returns `true` if the element has the passed style. <br><br>

#### `addStyle(styles: object, el: UIElement = this): TinyElement`
Add passed styles. <br><br>

#### `clearStyles(el: UIElement = this): TinyElement`
Clears the passed styles. <br><br>

#### `removeStyles(styles: string | Array<string>, el: UIElement = this): TinyElement`
Removes the passed style(s). <br><br>

#### `getChild(index: number, parent = this): HTMLElement`
Returns the child from the passed index. <br><br>

#### `addChildren(children: HTMLElement | Array<HTMLElement> | HTMLCollection | Array<DocumentFragment>, parent = this): TinyElement`
Inserts the passed elements as children. <br><br>

#### `removeChildren(el: UIElement = this): TinyElement`
Removes all the children. <br><br>

#### `updateHtml(html: string, el: UIElement = this): TinyElement`
Updates html of the element. <br><br>

#### `show(el: UIElement = this): TinyElement`
Shows the element. <br><br>

#### `hide(el: UIElement = this): TinyElement`
Hides the element. <br><br>

#### `enable(element: UIElement = this, enable = true): TinyElement`
Enables / disables component based on passed flag. <br><br>

#### `on<K extends keyof HTMLElementEventMap>(eventName: string, handler: EventHandler<K>, el: UIElement = this): TinyElement`
Subscribes to the event. 
The `EventHandler` type refers a DOM event handler and it looks as below,

```ts
type EventHandler<K extends keyof HTMLElementEventMap> = (this: HTMLElement, ev: HTMLElementEventMap[K]) => any;
```

#### `off<K extends keyof HTMLElementEventMap>(eventName: string, handler: EventHandler<K>, el: UIElement = this): TinyElement`
Un-subscribes from the event. <br><br>

#### `onConnected()`
Invoked after the element is connected to DOM (life-cycle hook).<br><br>

#### `onDisconnected()`
Invoked after the element is dis-connected to DOM (life-cycle hook).<br><br>

#### `onChanges(changes: ElementChanges)`
Called initially and whenever there is a change in inputs (life-cycle hook).
The `ElementChanges` type looks as below,

```ts
type ElementChanges = Map<string, { oldValue: any; newValue: any }>;
```

## License

MIT

## Contact

vijay#dot#prideparrot#at#gmail.com
