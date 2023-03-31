"use client";
import React from "react";
import { logOut, useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import LandingLayout from "@/components/layouts/landing-layout";

function Chat() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    console.log("chatuser" + JSON.stringify(user));
    if (user == null) router.push("/login");
  }, [user]);

  return (
    <h1>
      Only logged in users can view this page
      <button onClick={logOut}>logout</button>
    </h1>
  );
}

export default Chat;
