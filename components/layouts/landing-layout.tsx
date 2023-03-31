import React, { PropsWithChildren } from "react";
import Impressum from "../ui/impressum";
import Navbar from "../ui/navbar";

function LandingLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Impressum />
    </>
  );
}
export default LandingLayout;
