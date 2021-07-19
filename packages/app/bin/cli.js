#!/usr/bin/env node

const chalk = require('chalk')
const {Command} = require("commander")
const inquirer = require("inquirer")

const create = require("./create")

const program = new Command()
const question = [
	{
		name:'conf',              /* key */
		type:'confirm',           /* 确认 */
		message:'是否创建新的项目？' /* 提示 */
	},{
		name:'name',
		message:'请输入项目名称？',
		when: res => Boolean(res.conf) /* 是否进行 */
	},{
		name:'author',
		message:'请输入姓名？',
		when: res => Boolean(res.conf)
	},{
		type: 'list',            /* 选择框 */
		message: '状态管理库？',
		name: 'state',
		choices: ['mobx','redux'], /* 选项*/
		filter: function(val) {    /* 过滤 */
			return val.toLowerCase()
		},
		when: res => Boolean(res.conf)
	}
]

program.version('0.0.1');
program
	.command('add')
	.description("add a new project")
	.action((source, destination) => {
		console.log(chalk.blue("欢迎光临"))
		inquirer.prompt(question)
			.then(res=>{
				create(res)
			})
	});

program.parse(process.argv)

