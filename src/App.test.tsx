import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('App component renders with heading', () => {
    const AppComponent = render(<App />);
    const grabH2 = AppComponent.getByTestId('title');
    expect(grabH2.textContent).to.equal('We are testing React.');
  });
});
