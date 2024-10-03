import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

const text = `
Hi.
I'm Louis
How? Are? you?
Okay then dfiffi.

`;

// 遞迴拆解
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 5,
  chunkOverlap: 0,
});

const output = await splitter.createDocuments([text]);

console.log(output);
