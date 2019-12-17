/* Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. Через for of*/

var arr = [2, 3, 4, 5]
var result = 1
for (var elem of arr) {
  result = result * elem
}
console.log(result)