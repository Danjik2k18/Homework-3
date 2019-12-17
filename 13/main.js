/* Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
 */

var str = 'aaa bbb ccc'

console.log(str.substr(4, 3))
console.log(str.substring(4, 7))
console.log(str.slice(-7, -4))