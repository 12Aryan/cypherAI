import { GoogleGenAI } from "@google/genai";

const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: geminiApiKey,
});

async function run(prompt: string) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `*instructions: Reply in mean tone and with a bit of spice-* ${prompt}`,
  });

  return response?.text || "";
}

export default run;
