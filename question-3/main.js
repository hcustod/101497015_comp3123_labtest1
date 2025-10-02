import { removeFile } from './remove.js';
import { addFile } from './add.js';
import { fileURLToPath } from 'url';
import path from 'path';

const dirPath = './logs';

process.chdir(path.dirname(fileURLToPath(import.meta.url)));

removeFile(dirPath);
addFile();
