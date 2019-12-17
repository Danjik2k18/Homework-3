/* В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
 */

//1 Вариант  
var date = '2025-12-31'
var newDate = date.split('-')
console.log(newDate[2] + '.' + newDate[1] + '.' + newDate[0])

//2 Вариант
str = '2025-12-31'
str = str.replace(/-/g, '.').split('.').reverse().join('.')
console.log(str)