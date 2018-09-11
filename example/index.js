import React from 'react';
import { render } from 'react-dom';
import Spinner from '../';
import SPINNERS from 'cli-spinners/spinners.json';

function Demo() {
  return (
    <main>
      <h1>react-cli-spinners</h1>
      {Object.keys(SPINNERS).map(key => (
        <figure key={key}>
          <code>{`<Spinner spinner="${key}"/>`}</code>
          <div style={{  margin: '1em 0' }}>
            <div style={{ fontSize: '1em', height: '1.5em', }}><Spinner spinner={key}/></div>
            <div style={{ fontSize: '3em', height: '1.5em', }}><Spinner spinner={key}/></div>
            <div style={{ fontSize: '6em', height: '1.5em', }}><Spinner spinner={key}/></div>
          </div>
        </figure>
      ))}
    </main>
  );
}

render(<Demo/>, window.root);
