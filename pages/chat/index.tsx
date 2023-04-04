"use client";
import React, { useState } from "react";
import { logOut, useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function Chat() {
  const { user } = useAuthContext();
  const router = useRouter();

  const [text, setText] = useState("");
  const [output, setOutput] = useState("Start");

  React.useEffect(() => {
    if (user == null) router.push("/login");
  }, [user]);

  async function handleChatCall(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = text;
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
  );
}

export default Chat;
