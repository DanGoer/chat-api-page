import React, { PropsWithChildren } from "react";
import Impressum from "../ui/impressum";
import Navbar from "../ui/navbar";
import { AuthContextProvider } from "@/context/AuthContext";

function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {children}
        <Impressum />
      </AuthContextProvider>
    </>
  );
}

export default LandingLayout;
