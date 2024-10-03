import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import { OpenAI, ChatOpenAI } from '@langchain/openai';
import { OpenAIEmbeddings } from '@langchain/openai';

const { OPENAI_API_KEY, GPT_END_POINT } = process.env;

const aiModel = new OpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: 'gpt-3.5',
  // configuration: {
  //   baseURL: GPT_END_POINT
  // }
});

const chatModel = new ChatOpenAI({ modelName: 'gpt-3.5-turbo-1106', openAIApiKey: OPENAI_API_KEY });

const embeddingModel = new OpenAIEmbeddings({
  openAIApiKey: OPENAI_API_KEY,
});

export const getDirname = (importUrl) => {
  const __filename = fileURLToPath(importUrl); // get the resolved path to the file
  return path.dirname(__filename); // get the name of the directory
};

export { aiModel, embeddingModel, chatModel };
