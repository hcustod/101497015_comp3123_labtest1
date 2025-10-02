import fs from 'fs';
import path from 'path';

export function addFile() {
    try {
        const dirpath = './logs';

        if (dirChecker(dirpath)) {
            fileSeeder(dirpath);
        }
    }
    catch (error) {
        console.error(`Error writing file at ${dirpath}:`, error);
    }
}

function dirChecker(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Directory created at ${dirPath}`);
        return true;
    } else {
        console.log(`Directory already exists at ${dirPath}`);
        return false;
    }
}

function fileSeeder(dirPath) {
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = `${dirPath}/${fileName}`;
        const content = "This is a file";
        fs.writeFileSync(filePath, content);
        console.log(`Created: ${fileName}`);
    }
}
