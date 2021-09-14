import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import { TinyElement, element } from './src';

@element('todo-app')
class TodoApp extends KitElement {

}

document.addEventListener('DOMContentLoaded', () => {
  const board = document.createElement('todo-app');
  document.body.appendChild(board);
});
