import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { OpenAIEmbeddings } from '@langchain/openai';
import { getDirname } from '../../utils/utils.mjs';
import path from 'path';

const assets = path.resolve(getDirname(import.meta.url), '../../assets');

// Load the vector store from the same directory
// If you want to import the browser version, use the following line instead:
// const loadedVectorStore = await CloseVectorWeb.load(
export const loadedVectorStore = await FaissStore.load(assets, new OpenAIEmbeddings());

// console.log(loadedVectorStore);

// vectorStore and loadedVectorStore are identical
const result = await loadedVectorStore.similaritySearch('物權是甚麼？', 1);
console.log(result);
