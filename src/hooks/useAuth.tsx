import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return { isAuthenticated, setIsAuthenticated };
};

export default useAuth;
