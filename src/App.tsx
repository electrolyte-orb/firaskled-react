import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Counter from './Component/Counter/Counter';

export default function App() {
  return (
    <>
      <div className="App">
        <h2 data-testid="title">We are testing React.</h2>
      </div>
      <Counter title="myAwesome Counter" />

      <Counter title="myAwesome Counter" init={8} />
    </>
  );
}
