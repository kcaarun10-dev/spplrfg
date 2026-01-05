
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: "You are an AI assistant on Arun Regmi's official portfolio website. Arun is a professional full-stack developer and AI enthusiast. Your job is to answer questions about Arun's work, skills, and availability in a helpful, friendly, and professional manner. Keep responses concise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later or reach out to Arun directly via the contact form!";
  }
};
