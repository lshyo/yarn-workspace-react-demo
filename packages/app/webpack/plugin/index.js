const { Compilation } = require("webpack")
const { compilation } = require("webpack")

const pluginName = "TestPlugin"
class Test{
    apply(compiler){
        compiler.hooks.entryOption.tap(pluginName,(context,entry)=>{
            // console.log("entry 被处理过后回调",context,entry)
        })
        compiler.hooks.watchRun.tap(pluginName,(compilation)=>{
            console.log("监听,生成新的compilation")
        })
        compiler.hooks.watchClose.tap(pluginName,(compilation)=>{
            console.log("监听后，生成新的compilation")
        })
    }
}
module.exports = Test