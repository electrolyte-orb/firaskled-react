import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import Counter from './Counter';

describe('<Counter />', () => {
  it('Counter Renders', () => {
    const { getByTestId } = render(<Counter title="My Counter 1" init={0} />);

    const { textContent } = getByTestId('counter-title');
    expect(textContent).to.equal('My Counter 1');
  });

  it('default Value', () => {
    const { getByTestId } = render(<Counter title="My Counter 1" init={5} />);

    const { textContent } = getByTestId('counter-value');
    expect(textContent).to.equal('5');
  });
  it('Increment button', () => {
    const { getByTestId } = render(<Counter title="My Counter 1" init={5} />);
    const addButton = getByTestId('counter-increment');
    const value = getByTestId('counter-value');
    fireEvent.click(addButton);

    expect(value.textContent).to.equal('6');
  });
});
