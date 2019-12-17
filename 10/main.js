/* Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
 */

var arr = ['10', '20', '30', '50', '235', '3000']

function checkNumbers(elem) {
  for (var i = 0; i < elem.length; i++) {
    if (elem[i][0] === '1' || elem[i][0] === '2' || elem[i][0] === '5') {
      alert(elem[i])
    } else continue
  }
}
checkNumbers(arr)