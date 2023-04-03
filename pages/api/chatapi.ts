// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const { Configuration, OpenAIApi } = require("openai");

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const textRequest = "hello";
  console.log("request" + req.body);
  res.status(200).json({ answer: req.body });
  /* try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    console.log(" test123");
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: textRequest }],
    });
    console.log("compli" + completion.data);
    console.log(completion.data.choices[0].message);

    res.status(200).json({ answer: completion.data.choices[0].message });
  } catch (error: any) {
    console.log("error");
    res.status(400).json({ answer: error.message });
  } */
}
