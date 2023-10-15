import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser, OutputFixingParser } from 'langchain/output_parsers';
import { aiModel } from '../utils/utils.mjs';

// https://js.langchain.com/docs/modules/model_io/output_parsers/output_fixing_parser
const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's question",
  source: "source used to answer the user's question, should be a website.",
});

const badOutput = `\`\`\`json
  {
    "answer": "foo",
    "sources": "foo.com"
  }
  \`\`\``;

// handle error
try {
  const output = await parser.parse(badOutput);
  console.log('output: ', output);
} catch (error) {
  const fixParser = OutputFixingParser.fromLLM(aiModel, parser);
  const output = await fixParser.parse(badOutput);
  console.log('Fixed output: ', output);
}
