import 'dotenv/config';
import { ChatOpenAI } from '@langchain/openai';
import { tool } from '@langchain/core/tools';
import { z } from 'zod';

const { OPENAI_API_KEY, GPT_END_POINT } = process.env;

// https://js.langchain.com/docs/integrations/chat/openai/
const weatherTool = tool((_) => 'no-op', {
  name: 'get_current_weather',
  description: 'Get the current weather',
  schema: z.object({
    location: z.string(),
  }),
});

const llmWithStrictTrue = new ChatOpenAI({
  model: 'gpt-4o',
  openAIApiKey: OPENAI_API_KEY,
}).bindTools([weatherTool], {
  strict: true,
  tool_choice: weatherTool.name,
});

// Although the question is not about the weather, it will call the tool with the correct arguments
// because we passed `tool_choice` and `strict: true`.
// const strictTrueResult = await llmWithStrictTrue.invoke('What is 127862 times 12898 divided by 2?');
const strictTrueResult = await llmWithStrictTrue.invoke('What is the current weather in London?');

console.dir(strictTrueResult.tool_calls, { depth: null });
