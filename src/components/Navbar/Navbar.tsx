import React from 'react';

interface NavbarProps {
  user?: {
    displayName?: string;
    email: string;
    imageURL?: string;
  };
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <div data-testid="navbar">
      <h2 data-testid="navbar-title">Firaskled</h2>

      {user ? (
        <div>
          <img src={user.imageURL} data-testid="navbar-user-image" />
          <span data-testid="navbar-user-name">{user.displayName}</span>
        </div>
      ) : (
        <button data-testid="navbar-button-signin">Sign In</button>
      )}
    </div>
  );
}
