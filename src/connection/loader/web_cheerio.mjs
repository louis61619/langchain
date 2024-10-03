import { CheerioWebBaseLoader } from 'langchain/document_loaders/web/cheerio';

const loader = new CheerioWebBaseLoader('https://vuejs.org/guide/introduction.html', {
  selector: '.vt-doc',
});

const docs = await loader.load();

console.log(docs);
