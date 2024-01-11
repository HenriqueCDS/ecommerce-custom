import { createContext, useContext, useState } from 'react';

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário";

export const UsuarioProvider = ({ children }) => {
  const [Usuario, setUsuario] = useState({
    name: '',
    token: ''
  });


  const updateUsuario = (nome, token) => {
    setUsuario({ nome, token });
  };

  return (
    <UsuarioContext.Provider value={{ Usuario, updateUsuario }}>
      {children}
    </UsuarioContext.Provider>
  )
}




export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

        

