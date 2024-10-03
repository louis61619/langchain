import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { getDirname, embeddingModel } from '../../utils/utils.mjs';
import path from 'path';

// Create a vector store through any method, here from texts as an example
// If you want to import the browser version, use the following line instead:
// const vectorStore = await CloseVectorWeb.fromTexts(
// const vectorStore = await FaissStore.fromTexts(
//   ['Hello world', 'Bye bye', 'I am the world'],
//   [{ id: 2 }, { id: 1 }, { id: 3 }],
//   embeddingModel,
// );

// // Save the vector store to a directory
// const directory = localEmbeddingCache;

const loader = new PDFLoader(path.resolve(getDirname(import.meta.url), '../../assets/民法總則.pdf'));
const docs = await loader.load();

const vectorStore = await FaissStore.fromDocuments(docs, embeddingModel);

await vectorStore.save(path.resolve(getDirname(import.meta.url), '../../assets'));
