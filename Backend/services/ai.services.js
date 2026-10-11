// 1. Import the modern package
const { GoogleGenAI } = require("@google/genai");

// 2. Initialize the unified client 
// (It automatically picks up process.env.GEMINI_API_KEY if passed as an object)
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function run(prompt) {
  // 3. Directly call the models service
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash", // Or your preferred model version
    contents: prompt,
    systemInstruction: `You are a science teacher who gives answer to the questions.
     Answer is in the form Where only question answer are generated.
     After uploading question you should ask how much marks answer user wants. And then generate answer.`
    
  });

  // 4. Access the text directly as a plain string property
  return response.text;
}

module.exports = run;

