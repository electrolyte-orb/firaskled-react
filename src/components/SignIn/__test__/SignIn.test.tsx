import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import SignIn from '../SignIn';
import firebase from '../../../firebase';
import 'firebase/auth';

describe('<SignIn>', () => {
  it('should render sign in button', () => {
    const { getByTestId } = render(<SignIn />);
    expect(getByTestId('signin-button').textContent).to.equal('Sign In');
  });
  it('sign in button should work', () => {
    const { getByTestId } = render(<SignIn />);
    const signInBtn = getByTestId('signin-button');
    fireEvent.click(signInBtn);
    expect(firebase.auth().currentUser).to.not.equal(null);
  });
});
