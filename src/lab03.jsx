/**
 
Another interesting feature of jsx it that component are just functions.

We can pass arguments to a component to personalize its appearence.
Components' arguments are called `props` (short for properties).

Todo: Complete this code to render the following component.
    You should pass an array of objects as props

 <main>
  <ul>
    <li>Learn declatirative dom, <span>done</span></li>
    <li>Learn dom rendering, <span>doing</span></li>
  </ul>
 </main>
 
 */

 import { createElement, render } from './mini';

const todos = [
  {
    id: 'todo-0',
    status: 'done',
    name: 'Learn declatirative dom',
  },
  {
    id: 'todo-1',
    status: 'doing',
    name: 'Learn dom rendering',
  },
];

function TodoItem(todo) {
  // returns an html li item with its name and status

  return <li id={todo.id}>{todo.name} : {todo.status}</li>;
}

function TodoList() {
  return <ul>{todos.map(TodoItem)}</ul>;
}

/** @jsx createElement */
function App() {
  const body = (
    <main>
      <h1>Hello List</h1>
      <TodoList />
    </main>
  );

  return body;
}

const rootElement = document.getElementById('app');
const appComponent = <App />;
render(appComponent, rootElement);