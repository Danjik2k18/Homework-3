/*Задание на МС.  Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат
 */

var arr = []
var newElem

function launchPrompt(n) {
    for (var i = 0; i < n; i++) {
        newElem = +prompt()
        arr.push(newElem)
    }
    return console.log(arr)
}
launchPrompt(3)

function arraySum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return alert(sum);
}
arraySum(arr);