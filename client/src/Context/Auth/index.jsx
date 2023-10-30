import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [ehAutenticado, setEhAutenticado] = useState(false);

    const setAuth = (boolean) => {
      setEhAutenticado(boolean);
    }

    async function EhAuth() {
    try {
      const response = await fetch('http://localhost:5000/auth/eh-verificado', {
        method: 'GET',
        headers: {token: localStorage.token}
      });
        const parseRes = await response.json();
        parseRes === true ? setEhAutenticado(true) : setEhAutenticado(false);         
      } catch (err) {
        console.error(err.message);
      }
    }

    return (
      <AuthContext.Provider value={{ ehAutenticado, EhAuth, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
}