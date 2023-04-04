import React, { useContext, useState, createContext } from "react";

export const SettingsContext = createContext<React.ReactNode | any>({});

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsContextProvider: any = ({ children }: any) => {
  const [mood, setMood] = useState<any>("neutral");
  const [role, setRole] = useState<string>("default");

  return (
    <SettingsContext.Provider value={{ mood, setMood, role, setRole }}>
      {children}
    </SettingsContext.Provider>
  );
};
