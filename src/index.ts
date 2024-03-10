import { Hono } from 'hono';
import { Ai } from '@cloudflare/ai';

type Bindings = {
  AI: string;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/', async (c) => {
  const ai = new Ai(c.env.AI);
  const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', {
    prompt: 'Is this coffee?',
  });
  return c.json({ response });
});

export default app;
