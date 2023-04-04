import { PropsWithChildren } from "react";
import Impressum from "../ui/impressum";
import Navbar from "../ui/navbar";
import { AuthContextProvider } from "@/context/AuthContext";
import { SettingsContextProvider } from "@/context/SettingsContext";

function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AuthContextProvider>
        <SettingsContextProvider>
          <Navbar />
          {children}
          <Impressum />
        </SettingsContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default LandingLayout;
