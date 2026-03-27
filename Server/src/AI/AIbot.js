
import OpenAI from "openai";



const main=async(idea)=> {
  const chatCompletion = await getGroqChatCompletion(idea);
  // Print the completion returned by the LLM.
  const raw= (chatCompletion.choices[0]?.message?.content || "");
  try {
    return JSON.parse(raw)
  } catch (err) {
    return { error: "Invalid JSON", raw }
  }
}
async function getGroqChatCompletion(idea) {
  const prompt=`Return ONLY valid JSON.

Do not include any explanation or text.

Format:
{
  "scope": "string",

  "features": ["string"],

  "timeline": [
    {
      "phase": "string",
      "duration": "string"
    }
  ],

  "cost": {
    "minimum": number,
    "maximum": number
  },

  "techStack": ["string"]
}

Project Idea:
${idea}
`
  const client = new OpenAI({
    apiKey:`${process.env.GROQ_API_KEY}`,
    baseURL: "https://api.groq.com/openai/v1",
  });
  return client.chat.completions.create({
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "groq/compound",
  });
}

export {main}