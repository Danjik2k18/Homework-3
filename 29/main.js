/* Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().
 */
// var newRandom;
var arr = []
console.log(arr)

function randomNumbers(n) {
    newRandom = 1;
    for (var i = 0; i < n; i++) {
        newRandom = (Math.random(i).toFixed(2))
        var b = (newRandom ** 5).toFixed(2)
        arr[i] = b
    }
    return arr
}
randomNumbers(10)

for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i])
}