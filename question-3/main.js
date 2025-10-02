import { removeFile } from './remove.js';
import { addFile } from './add.js';

const dirPath = './logs';

removeFile(dirPath);
addFile(`${dirPath}/app.log`, '');
