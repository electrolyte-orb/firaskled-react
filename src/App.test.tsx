import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import firebase from 'firebase/app';
import App from './App';

describe('<App>', () => {
  it('App component renders with navbar', () => {
    const { getAllByTestId } = render(<App />);
    expect(getAllByTestId('navbar').length).to.equal(1);
  });
});
