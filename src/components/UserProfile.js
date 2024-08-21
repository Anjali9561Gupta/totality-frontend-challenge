import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function UserProfile() {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Please log in to see your profile.</p>;

  return (
    <div>
      <h2>Welcome, {user.email}</h2>
      {/* Add avatar if available */}
    </div>
  );
}

export default UserProfile;