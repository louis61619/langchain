import { PromptTemplate } from 'langchain/prompts';
import { CommaSeparatedListOutputParser, StructuredOutputParser } from 'langchain/output_parsers';
import { aiModel } from '../utils/utils.mjs';
// import { RunnableSequence } from "langchain/schema/runnable";

// read more: https://js.langchain.com/docs/modules/model_io/output_parsers/
const parser = new CommaSeparatedListOutputParser();
const formatInstance = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template: 'List six {subject}. \n {format_instructions}',
  inputVariables: ['subject'],
  partialVariables: { format_instructions: formatInstance },
});

const input = await prompt.format({
  subject: 'best country in the world',
});

const res = await aiModel.call(input);

console.log(input, await parser.parse(res));
