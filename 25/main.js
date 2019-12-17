/* Напишите функция, которая принимает аргументом строку и возврашает нам строку преобразуя первую букву строки в верхний регистр.
 */

function conversion(str) {
    return console.log(str[0].toUpperCase() + str.replace(str[0], ''))
}
conversion('excuse me!')