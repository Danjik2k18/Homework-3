/*Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
 a. Добавьте в начало массива значение ‘Backbone.js’
 b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
 c. Добавьте в массив значение ‘CommonJS’ вторым элементом
 d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
 z.  Сделайте массив и назовите dlyaLyudshix, перебирает массив, где только удалили ‘jQuery’, и перебирайте этот массив и если вы найдёте там значние ‘Vue.js’, то положите в массив с названием dlyaLyudshix
*/

var arr = ['AngularJS', 'JQuery']
arr.unshift('Backbone.js')
arr.push('ReactJS', 'Vue.js')
arr.splice(1, 0, 'CommonJS')
var elem = arr.splice(3, 1)
alert(elem + ' - это здесь лишнее')
console.log(arr)
var dlyaLyudshix = []

arr.forEach(function (item) {
    if (item === 'Vue.js') {
        dlyaLyudshix.push(item)
    }
})
console.log(dlyaLyudshix)