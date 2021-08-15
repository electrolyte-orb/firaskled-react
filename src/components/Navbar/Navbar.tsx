import React from 'react';
import './Navbar.css';
interface NavbarProps {
  user?: {
    displayName?: string;
    email: string;
    imageURL?: string;
  };
}

export default function Navbar({ user }: NavbarProps) {
  return (
    <div data-testid="navbar" className="Navbar" id={user && 'NavbarSignedIn'}>
      <div className="around">
        <a href="#">
          <button
            data-testid="navbar-button-signin"
            className="signin-button reset"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </a>
      </div>
      <h2 data-testid="navbar-title" className="Navbar-title">
        Firaskled
      </h2>
      {user ? (
        <div>
          <img src={user.imageURL} data-testid="navbar-user-image" />
          <span data-testid="navbar-user-name">{user.displayName}</span>
        </div>
      ) : (
        <div className="around">
          <button
            data-testid="navbar-button-signin"
            className="signin-button reset"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
