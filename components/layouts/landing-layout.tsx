import { PropsWithChildren } from "react";
import Impressum from "../ui/impressum";
import Navbar from "../ui/navbar";
import { AuthContextProvider } from "@/context/auth-context";
import { SettingsContextProvider } from "@/context/settings-context";

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
