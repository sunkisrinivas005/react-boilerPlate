import React from 'react';
import ReactDOM from 'react-dom';


const rootEl = document.getElementById('root');

let render = () => {
  // Dynamically import our main App component, and render it
  const App = require('./App').default;
  ReactDOM.render(
    <App/>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const App = require('./App').default;
    render(
      <App/>,
      rootEl
    );
  });
}

render();
