import pug from 'pug'
import template from '../static/test.pug'
console.log(pug)
// console.log(template({ name: 'тест'}))
console.log(pug.render('div #{name}', { name: 'тест'}))
// const compiledFunction = pug.compileFile(template);
//
// console.log(compiledFunction())

