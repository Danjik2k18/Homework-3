/* Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.*/



var obj = {
  'Минск': 'Беларусь',
  'Москва': 'Россия',
  'Киев': 'Украина'
};

for (var elem in obj) {
  alert(elem + ' - это ' + obj[elem])
}