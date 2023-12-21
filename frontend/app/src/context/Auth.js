import { createContext, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    rid: "",
    name: "",
    sector: "",
    office: "",
    permissions: "",
  });

  const context = { user, setUser };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
