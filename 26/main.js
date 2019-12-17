/* Напишите функция, которая принимает аргументом строку и возврашает нам строку преобразуя последнюю букву строки в верхний регистр.
 */

var strOne
var strTwo
var strTree

function conversion(str) {
    strOne = str.slice(0, -1)
    strTwo = str[str.length - 1].toUpperCase()
    strTree = strOne + strTwo
    return console.log(strTree)
}
conversion('excuse me')