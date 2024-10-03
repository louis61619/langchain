import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { embeddingModel } from '../../utils/utils.mjs';
// import { OpenAIEmbeddings } from '@langchain/openai';

// const embeddings = new OpenAIEmbeddings({
//   model: 'text-embedding-3-small',
// });

const vectorstore = await MemoryVectorStore.fromTexts(
  ['Hello world', 'Bye Bye', 'nice world'],
  [{ id: 2 }, { id: 1 }, { id: 3 }],
  embeddingModel,
);

console.log(vectorstore);

// const res = await vectorstore.similaritySearch('hello', 1);

// console.log(res);
