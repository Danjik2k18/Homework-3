/*
Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
 "1x1=1; 2x1=1"
 "1x2=2; 2x2=4"
И выходим и останавливаем цикл, когда будет 6 умножнить на 6
 */

var elem = false
for (var i = 1; i <= 9; i++) {
    document.write("<div style='float: left; width: 80px;'>");
    for (var j = 1; j <= 9; j++) {
        if (i === 6 & j === 6) {
            elem = true
            document.write(i + "*" + j + "=" + (i * j) + "<br>");
            break
        }
        document.write(i + "*" + j + "=" + (i * j) + "<br>");
    }
    if (elem) {
        break
    }
    document.write("</div>");
}