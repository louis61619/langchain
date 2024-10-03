// https://js.langchain.com/docs/how_to/routing/
// 透過語意匹配
import { OpenAIEmbeddings } from '@langchain/openai';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { cosineSimilarity } from '@langchain/core/utils/math';
import { aiModel, embeddingModel, chatModel } from '../utils/utils.mjs';

const descrip1 = `
  擅長物理學知識
`;

const descrip2 = `
  了解小明的訊息
`;

const decrip3 = `
  擅長金融知識
`;

const embeddings = embeddingModel;

const templates = [descrip1, descrip2, decrip3];
const templateEmbeddings = await embeddings.embedDocuments(templates);

const promptRouter = async (query) => {
  const queryEmbedding = await embeddings.embedQuery(query);
  // 使用 餘弦相似度 對比，queryEmbedding 為主對比兩個 prompt 所以會返回兩個相同結果
  const r = cosineSimilarity([queryEmbedding], templateEmbeddings);
  const similarity = r[0];
  const curDescripIndex = similarity.reduce((preIndex, cur, index, arr) => {
    if (cur > arr[preIndex]) {
      return index;
    }
    return preIndex;
  }, 0);
  const curDescrip = templates[curDescripIndex];
  console.log(curDescrip);

  // promptTemplate = ChatPromptTemplate.fromTemplate(curDescrip);
  // return promptTemplate.invoke({ query });
};

// const chain = RunnableSequence.from([promptRouter, chatModel, new StringOutputParser()]);

console.log(await promptRouter('甚麼是黑洞?'));

console.log(await promptRouter('小明是誰?'));

console.log(await promptRouter('告訴我經濟如何運轉?'));
