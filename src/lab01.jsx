/**
 As mentioned earlier, jsx is a file extension introduced by react. 
 It allows us to combine html, js and css declaratively.
  
 An interesting feature of jsx is that we can render data based on js variables.
 Variables that are wrapped with curly braces will transpiled into their values. 

 Todo: Complete this code to render the following component.
       P.S. You should use two variables with jsx.
 
 ```
 <main>
  <h1>Hello, World!</h1>
  <p>My name is Alex Xela</p>
 </main>
 ```


 */

 import { createElement, render } from './mini';


/** @jsx createElement */
function App() {
  const h1 = <h1>Hello, World!</h1>;
  const p = <p>My name is Alex Xela</p>;
  
  const body = (
    <main>
      {h1}
      {p}
    </main>
  );

  return body;
}

const rootElement = document.getElementById('app');
const appComponent = <App />;
render(appComponent, rootElement);