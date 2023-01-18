import { useAuth0 } from '@auth0/auth0-react';

import React from 'react';

function LogoutButton() {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className='logout'>
        <p className='greet-user-logout'>Hello {user?.name}</p>
        <button className='logout-btn' onClick={() => logout()}>
          Sign Out
        </button>
      </div>
    )
  );
}

export default LogoutButton;
