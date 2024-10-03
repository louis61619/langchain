import { embeddingModel } from '../../utils/utils.mjs';

// 轉成比較好給AI使用的數字 向量化 embedding
// 感覺是將關聯的文本進行一個分類集成
const output = await embeddingModel.embedQuery('hello');

console.log(output);
