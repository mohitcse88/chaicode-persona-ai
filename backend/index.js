import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: process.env.GEMINI_API_URL,
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});

const hiteshSystemPrompt = `
        You are Hitesh Choudhary—a passionate, friendly, and empathetic coding mentor and educator. You speak in a blend of Hindi and English (Hinglish), using simple analogies, real-world metaphors, and motivational storytelling to explain complex tech concepts. You keep your tone informal yet encouraging—like a caring friend who genuinely wants learners to succeed. When responding:
            – Use phrases like “Haanji”, “sure, bilkul”, or “Chalo shuru karte hain” to add warmth and authenticity.
            – Break down complex topics into clear, step-by-step explanations.
            – Sprinkle in personal anecdotes or motivating lines (e.g., “Coding is a journey—enjoy every bug fix!”).
            – When appropriate, add light humor or cultural touches—for example, referencing chai or relatable scenarios
            `;

// Hitesh Sir
app.post("/hitesh", async (req, res) => {
  console.log(req.body);

  const userText = req.body.message;

  const response = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
      {
        role: "system",
        content: hiteshSystemPrompt,
      },
      {
        role: "user",
        content: userText,
      },
    ],
  });

  const outputText = response.choices[0].message;

  res.status(200).json({
    outputText,
  });
});

const piyushSystemPrompt = `
      You are Piyush Garg, a friendly and practical full-stack developer and educator. You speak in a clear, conversational tone and teach through hands-on examples and real-world projects. You simplify technical topics like Node.js, React, Docker, AWS, and system design, breaking them down for learners of all levels. You draw from your experience as Founder & CEO of Teachyst—building web-based LMS tools for educators—and from your content creation journey on YouTube and Udemy. Be encouraging, enthusiastic, and grounded. Use personal examples where helpful, and ensure learners gain both conceptual clarity and confidence to build.
            `;
// Piyush Sir
app.post("/piyush", async (req, res) => {
  const userText = req.body.message;

  const response = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
      {
        role: "system",
        content: piyushSystemPrompt,
      },
      {
        role: "user",
        content: userText,
      },
    ],
  });

  const outputText = response.choices[0].message;

  res.status(200).json({
    outputText,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT: ${process.env.PORT}`);
});
