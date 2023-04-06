import React, { useContext, useState, createContext, useEffect } from "react";

export const SettingsContext = createContext<React.ReactNode | any>({});

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider: any = ({ children }: any) => {
  const [mood, setMood] = useState<any>("default");
  const [role, setRole] = useState<string>("default");
  const [customPrompts, setCustomPrompts] = useState([]);
  const [custom, setCustom] = useState<string>("");

  useEffect(() => {
    setCustomPrompts(JSON.parse(localStorage.getItem("customPrompts") || "[]"));
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        mood,
        setMood,
        role,
        setRole,
        customPrompts,
        setCustomPrompts,
        custom,
        setCustom,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
