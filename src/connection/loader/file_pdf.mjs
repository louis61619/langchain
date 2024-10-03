import path from 'path';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const loader = new PDFLoader(path.resolve(__dirname, '../../assets/Louis-frontend.pdf'));

const docs = await loader.load();

console.log(docs);
