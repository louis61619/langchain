import { CharacterTextSplitter } from 'langchain/text_splitter';

const text = `
Hi.
I'm Louis
How? Are? you?
Okay then dfiffi.

`;

const splitter = new CharacterTextSplitter({
  separator: '\n', // 分割符
  chunkSize: 20, // 分割的塊的size
  chunkOverlap: 6, // 分割的塊增加一些信息的冗餘
});

const output = await splitter.createDocuments([text]);

console.log(output);
