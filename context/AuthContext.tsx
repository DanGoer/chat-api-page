import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";

import React, { useContext, useState, createContext, useEffect } from "react";

const auth = getAuth(firebase_app);

export const AuthContext = createContext<React.ReactNode | {}>({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: any = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
