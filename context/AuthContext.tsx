import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import firebase_app from "@/firebase/config";

import React, { useContext, useState, createContext, useEffect } from "react";

export const auth = getAuth(firebase_app);

export const AuthContext = createContext<React.ReactNode | any>({});
export const logOut = () => {
  signOut(auth);
};
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
    console.log("contextctuser" + user);
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
