/* Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
 */

var str = 'aaa@bbb@ccc'
var result = ''

function characterReplacement(symbols) {
    result = symbols.replace(/@/g, "!")
    return console.log(result)
}
characterReplacement(str)