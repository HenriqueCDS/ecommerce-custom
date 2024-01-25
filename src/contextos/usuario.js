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

  return context;
};

        

