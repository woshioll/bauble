'use-strict'

var s = 'hello'

function greet(name) {
    console.log(s+','+name+'!')
}

module.exports = greet;//把greet暴露出去
// 一个模块想要对外暴露变量（函数也是变量），可以用module.exports = variable;，一个模块要引用其他模块暴露的变量，用var ref = require('module_name');就拿到了引用模块的变量