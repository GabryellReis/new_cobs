import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    rid: "",
    name: "",
    sector: "",
    office: "",
    permissions: "",
  });

  const context = { user, setUser, loading, setLoading };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
