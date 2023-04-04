"use client";
import React, { useState } from "react";
import { logOut, useAuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import SettingsCard from "@/components/settings/settings-card";
import { useSettingsContext } from "@/context/settings-context";

function Chat() {
  const { user } = useAuthContext();
  const router = useRouter();

  const [text, setText] = useState("");
  const [output, setOutput] = useState("Start");

  const { role, mood } = useSettingsContext();

  React.useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  async function handleChatCall(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { role: role, mood: mood, message: text };
    const response = await fetch("/api/chatapi", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const newOutput = await response.json();
    console.log(newOutput);
    setOutput(newOutput.answer.content);
  }

  return (
    <>
      <h1>
        {output}
        Only logged in users can view this page
        <button onClick={logOut}>logout</button>
        <form onSubmit={(e) => handleChatCall(e)}>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            value={text}
            placeholder={"Please enter your question"}
          />
          <button type="submit">submit</button>
        </form>
      </h1>
      <SettingsCard />
    </>
  );
}

export default Chat;
