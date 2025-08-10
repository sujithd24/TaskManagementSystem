import React, { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Provider component to wrap the app and manage user role
export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState('user'); // 'user' or 'admin'

  const loginAs = (newRole) => setRole(newRole);

  return (
    <AuthContext.Provider value={{ role, loginAs }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth context
export const useAuth = () => useContext(AuthContext);