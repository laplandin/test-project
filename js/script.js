// Функция для валидации полей формы
function validate() {
  var quaterRegExp = /[0-9]{4}/;
  var cardHolderRegExp = /[A-Za-z]{4,}/;
  var cvvRegExp = /[0-9]{3}/;

// Массив для хранения результатов проверки
  var result = [];

// Проверка четырехзначных полей номера карты
  for (i = 1; i <= 4; i++) {
    if (quaterRegExp.test(document.getElementById('quaterGroup'+i).value) == true) {
      result[i] = true;
      document.getElementById('quaterGroup'+i).style.boxShadow="inset 0 0 3px 1px #99c100";
    } else {
      document.getElementById('quaterGroup'+i).style.border="1px solid red";
      result[i] = false;
    }
  }

// Проверка поля имя держателя
  if (cardHolderRegExp.test(document.getElementById('cardHolder').value) == true) {
    result.push(true);
    document.getElementById('cardHolder').style.boxShadow="inset 0 0 3px 1px #99c100";
  } else {
    document.getElementById('cardHolder').style.border="1px solid red";
    result.push(false);
  }

// Проверка поля кода безопасности
  if (cvvRegExp.test(document.getElementById('cvv').value) == true) {
    result.push(true);
    document.getElementById('cvv').style.boxShadow="inset 0 0 3px 1px #99c100";
  } else {
    document.getElementById('cvv').style.border="1px solid red";
    result.push(false);
  }

// Проверяем все ли проверки пройдены
  if (result.every(isTrue) == true) {
    this.submit();
  } else event.preventDefault();
}

// Функция для передачи методу every для оценки верности всех проверок
function isTrue(boolean) {
  return boolean == true;
}
