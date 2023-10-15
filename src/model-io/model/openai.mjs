import 'dotenv/config';
import { OpenAI } from 'langchain/llms/openai';

const { OPENAI_API_KEY } = process.env;

const aiModel = new OpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: 'gpt-3.5-turbo',

  // can add proxy here
  // configuration: {
  //   baseURL:
  // }
});

const init = async () => {
  const res = await aiModel.call('hello');
  console.log(res);
};

init();
