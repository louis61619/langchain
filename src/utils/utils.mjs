import 'dotenv/config';
import { OpenAI } from '@langchain/openai';
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

const embeddingModel = new OpenAIEmbeddings({
  openAIApiKey: OPENAI_API_KEY,
});

export { aiModel, embeddingModel };
