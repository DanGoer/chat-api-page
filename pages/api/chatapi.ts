// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { moodHandler, roleHandler } from "@/utility/prompthandler";
import type { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { role, mood, message } = req.body;
  const rolePrompt = roleHandler(role);
  const moodPrompt = moodHandler(mood);

  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: ` ${rolePrompt.prompt} und ${moodPrompt.prompt} und antworte auf diesen Text: ${message}`,
        },
      ],
    });

    res.status(200).json({ answer: completion.data.choices[0].message });
  } catch (error: any) {
    res.status(400).json({ answer: error.message });
  }
}
