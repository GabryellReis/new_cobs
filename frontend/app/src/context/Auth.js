import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({
    rid: "",
    name: "",
    sector: "",
    office: "",
    permissions: "",
  });
  const [loading, setLoading] = useState(false);

  const context = { user, setUser, loading, setLoading };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
