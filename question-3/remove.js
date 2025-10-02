import fs from 'fs';

export function removeFile(dirPath) {
    try {
        if (!dirChecker(dirPath)) {
            return;
        }

        for (const file of fs.readdirSync(dirPath)) {
            fs.unlinkSync(`${dirPath}/${file}`);
            console.log(`Deleted: ${file} from ${dirPath}.`);
        }

        fs.rmdirSync(dirPath);
        console.log(`Directory ${dirPath} has been removed.`);
    } catch (error) {
        console.error(`Error removing file at ${dirPath}:`, error);
    }
}

function dirChecker(dirPath) {
    if (fs.existsSync(dirPath)) {
        return true;
    } else {
        console.log(`There is no directory ${dirPath} to delete file from.`);
        return false;
    }
}
