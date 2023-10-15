import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
import { aiModel } from '../utils/utils.mjs';
// import { RunnableSequence } from "langchain/schema/runnable";

// read more: https://js.langchain.com/docs/modules/model_io/output_parsers/
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's question",
  source: "source used to answer the user's question, should be a website.",
});

const formatInstance = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template: 'Answer the users question as best as possible.\n{format_instructions}\n{question}',
  inputVariables: ['question'],
  partialVariables: { format_instructions: formatInstance },
});

const input = await prompt.format({
  question: 'What is the capital of France?',
});

const res = await aiModel.call(input);

console.log(input, await parser.parse(res));
