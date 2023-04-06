"use client";
import React, { useState } from "react";
import { logOut, useAuthContext } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import SettingsCard from "@/components/settings/settings-card";
import { useSettingsContext } from "@/context/settings-context";
import ConversationCard from "@/components/conversation/conversation-card";

function Chat() {
  const { user } = useAuthContext();
  const router = useRouter();

  const [text, setText] = useState("");
  const [output, setOutput] = useState({});
  console.log(output);

  const { role, mood, custom } = useSettingsContext();

  React.useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  async function handleChatCall(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      role: role,
      mood: mood,
      custom: custom,
      message: text,
    };
    const response = await fetch("/api/chatapi", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const newOutput = await response.json();
    console.group("sss" + JSON.stringify(newOutput));
    setOutput({ ...newOutput });
  }

  return (
    <>
      <div>
        <ConversationCard output={output} />
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
      </div>

      <SettingsCard />
    </>
  );
}

export default Chat;
