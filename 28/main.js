/* Создайте смешанный массив, например [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
 */

var arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6']
var sum = 0
for (var elem of arr) {
    if (elem == parseInt(elem)) {
        sum += parseInt(elem)
    }
}
alert(sum)