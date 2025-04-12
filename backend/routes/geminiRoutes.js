import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); // Use environment variable!

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    const response = await result.response;
    res.json({ response: response.text() });
  } catch (error) {
    console.error('Gemini error:', error);
    res.status(500).json({ error: 'AI processing failed' });
  }
});

// 👇 Change this to default export
export default router;