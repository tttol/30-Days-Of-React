import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

const jsxElement = (
  <main>
    <h1>This is a JSX element</h1>
    <p>Created by create-react-app</p>
  </main>
);

const root = createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    {jsxElement}
  </React.StrictMode>
)