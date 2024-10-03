import { ChatPromptTemplate } from '@langchain/core/prompts';
import { createStuffDocumentsChain } from 'langchain/chains/combine_documents';
import { createRetrievalChain } from 'langchain/chains/retrieval';
import { chatModel } from '../../utils/utils.mjs';
import { loadedVectorStore } from './faiss-load.mjs';

const questionAnsweringPrompt = ChatPromptTemplate.fromMessages([
  [
    'system',
    'You are an expert in state of the union topics. You are provided multiple context items that are related to the prompt you have to answer. Use the following pieces of context to answer the question at the end.\n\n{context}',
  ],
  ['human', '{input}'],
]);

const combineDocsChain = await createStuffDocumentsChain({
  llm: chatModel,
  prompt: questionAnsweringPrompt,
});

export const chain = await createRetrievalChain({
  retriever: loadedVectorStore.asRetriever(),
  combineDocsChain,
});

const response = await chain.invoke({
  input: 'Who is the article about?',
});

console.log('Chain response:');
console.log(response.answer);
// console.log(`Number of used source document chunks: ${response.context.length}`);
