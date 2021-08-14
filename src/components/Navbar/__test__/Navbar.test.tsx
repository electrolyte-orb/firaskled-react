import React from 'react';
import Navbar from '../Navbar';
import { render } from '@testing-library/react';
import { expect } from 'chai';

describe('Navbar Comp', () => {
  it('should render Correctly', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('navbar-title').textContent).to.equal('Firaskled');
  });

  it('should render signIn button when not signed in', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('navbar-button-signin').textContent).to.equal('Sign In');
  });

  it('should not render sign in button when signed in', async () => {
    const { queryByTestId } = render(
      <Navbar
        user={{
          email: 'e@g.com',
          displayName: 'VC',
          imageURL: 'http://google.com',
        }}
      />,
    );
    const element = queryByTestId('navbar-button-signin');
    expect(element).to.equal(null);
  });

  it('should render user image with name when signed in', () => {
    const { getByTestId } = render(
      <Navbar
        user={{ email: 'e@g.com', displayName: 'VC', imageURL: '/fav.ico' }}
      />,
    );

    expect(getByTestId('navbar-user-image').getAttribute('src')).to.equal(
      '/fav.ico',
    );
    expect(getByTestId('navbar-user-name').textContent).to.equal('VC');
  });
});
