const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const log = content => console.log(chalk.greenBright(content));
const { clone } = require('./download');
const { open } = open;
const spawn = async(...args) => {
    const { spawn } = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        //将子线程的流插到主线程上 
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.om('close', () => { resolve() });
    })
}
module.exports = async name => {
    clear();
    const data = await figlet('Welcome to lemon!');
    log(data);
    log(`柠檬 创建项目:${name}`);
    await clone('github:1272171893/Miniso', name);
    log('安装依赖......');
    await spawn('npm', ['install'], { cwd: `./${name}` });
    log(`安装完成`);
    await spawn('npm', ['run', 'dev'], { cwd: `./${name}` });
    open('https://localhost:8080')
}