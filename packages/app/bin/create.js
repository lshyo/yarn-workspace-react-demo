/**
 * @author：linsh
 * @date：2021-04-29
 **/
const chalk = require("chalk")
const create =(res)=>{
	chalk.green("开始构建...")
	console.log("create",res)
}

module.exports = create;