/* Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
 */

var str = 'я учу javascript!'
console.log(str.substr(1, str.length - 2))
console.log(str.substring(1, str.length - 1))
console.log(str.slice(-16, str.length - 1))