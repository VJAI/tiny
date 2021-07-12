import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
import { KitElement, element } from './src/kitty';

@element('todo-app')
class TodoApp extends KitElement {

}

document.addEventListener('DOMContentLoaded', () => {
  const board = document.createElement('todo-app');
  document.body.appendChild(board);
});
