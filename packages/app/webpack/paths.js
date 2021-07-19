const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd()); // 处理返回当前 Node 进程执行的目录
const workspaceAppPath = path.join(__dirname, '../../xshare');
module.exports  = {
    appSrc: path.resolve(__dirname, '../src'),
    resolveApp: p => path.resolve(appDirectory, p),
    appDirectory,
    workspaceAppPath,
    appModules:path.join(__dirname, '../../../node_modules')
}
