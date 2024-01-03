import { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [currentChat, setCurrentChat] = useState(null)
  const [user, setUser] = useState({
    rid: "",
    name: "",
    sector: "",
    office: "",
    permissions: "",
  });

  const context = { user, setUser, loading, setLoading, currentChat, setCurrentChat };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
