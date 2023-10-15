// import dotenv from 'dotenv'
import { PromptTemplate } from 'langchain/prompts';

// # see on https://js.langchain.com/docs/api/prompts/classes/PromptTemplate
const prompts = PromptTemplate.fromTemplate(`the {attribute} of {target}`);

const init = async () => {
  const part = await prompts.partial({
    attribute: 'name',
  });
  const res = await part.format({
    target: 'louis',
  });

  console.log(res);
};

init();
