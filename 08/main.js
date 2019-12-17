/* Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
 */

var arr = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10]
var sum = 0

function positiveNumbers(elem) {
  for (var i = 0; i <= elem.length; i++) {
    if (elem[i] > 0) {
      sum += elem[i]
    } else if (elem[i] < 0) {
      continue
    }
  }
  console.log('Сумма положительных елементов массива = ' + sum)
}
positiveNumbers(arr)