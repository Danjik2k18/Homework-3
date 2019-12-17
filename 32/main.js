/*Задание на МС.  Напишите объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). 
 */

// 1 variant
// var obj =  {
//   brand: prompt(),
//   model: prompt(),
//   resolution: prompt(),
//   color: prompt()
// }
// console.log(obj)

// 2 variant
var obj = {
    brand: '',
    model: '',
    resolution: '',
    color: ''
}
for (var x in obj) {
    var elem = prompt()
    obj[x] = elem
}
console.log(obj)