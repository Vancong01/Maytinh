function myFunction() {
var number1 = parseInt(document.getElementById("number1").value);
var number2 = parseInt(document.getElementById("number2").value);
var tinhtoan = document.getElementById("tinhtoan");
var pheptinh = tinhtoan.options[tinhtoan.selectedIndex].value;
var result = 0;
    switch (pheptinh) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
    }
    document.getElementById("result").value = result;
}
function reset() {
    document.getElementById('number1').value = "0";
    document.getElementById('number2').value = "0";
    document.getElementById("result").value = "0";
}
