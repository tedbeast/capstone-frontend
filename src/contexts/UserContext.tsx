import React from 'react';

interface User {
  userId: string;
  role: string;
}

// Create a context with an empty object as default value
export const UserContext = React.createContext<User>({userId: '', role: ''});