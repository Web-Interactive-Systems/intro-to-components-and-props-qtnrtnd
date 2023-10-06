/**
 Another interesting feature of jsx it that we can render data using js APIs.

 Todo: Complete this code to render the following component.
  P.S. You should use an array of strings or objects combined with jsx and `js map` function
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


 ```
 <main>
  <ul>
    <li>item 1</li>
    <li>item 2</li>
  </ul>
 </main>
 ```

 */

/** @jsx createElement */
function App() {
  const list = [];

  const body = (
    <main>
      <h1>Hello List</h1>
    </main>
  );

  return body;
}
