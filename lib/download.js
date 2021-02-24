const { promisify } = require('util');
const ora = require('ora');
module.exports.clone = async(repo, desc) => {
    const download = promisify(require('download-git-repo'));
    const processess = ora(`download......${repo}`);
    processess.start();
    await download(repo, desc);
    processess.succeed();
};