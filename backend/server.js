import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Agriculture AI Backend Running");
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const completion =
      await client.chat.completions.create({
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are an agriculture expert AI chatbot helping farmers.",
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
      });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);

    res.json({
      reply: "AI Error",
    });
  }
});


app.listen(8000, "0.0.0.0", () => {
  console.log("Server running on port 8000");
});