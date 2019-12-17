/* Напишите функция, которая принимает аргументом строку и преобразуйте например 'var_test_text' в 'varTestText'. Функция, конечно же, должен работать с любыми аналогичными строками.
 */
var one

function conversion(str) {
    one = str.split('_')
    return console.log(one[0] + one[1][0].toUpperCase() + one[1].replace(one[1][0], '') + one[2][0].toUpperCase() + one[2].replace(one[2][0], ''))
}
conversion('var_test_text')