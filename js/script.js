// Функция для валидации полей формы
function validate() {
  var quaterRegExp = /^[0-9]{4}$/;
  var cardHolderRegExp = /[A-Za-z]{4,}/;
  var cvvRegExp = /^[0-9]{3}$/;

// Массив для хранения результатов проверки
  var result = [];

// Проверка четырехзначных полей номера карты
  for (i = 1; i <= 4; i++) {
    if (quaterRegExp.test(document.querySelector('.quaterGroup'+i).value) == true) {
      result[i] = true;
      document.querySelector('.quaterGroup'+i).style.border="1px solid #e5eaef";
    } else {
      document.querySelector('.quaterGroup'+i).style.border="1px solid red";
      result[i] = false;
    }
  }

// Проверка поля имя держателя
  if (cardHolderRegExp.test(document.querySelector('.payment__card-holder').value) == true) {
    result.push(true);
    document.querySelector('.payment__card-holder').style.border="1px solid #e5eaef";
  } else {
    document.querySelector('.payment__card-holder').style.border="1px solid red";
    result.push(false);
  }

// Проверка поля кода безопасности
  if (cvvRegExp.test(document.querySelector('.payment__cvv-input').value) == true) {
    result.push(true);
    document.querySelector('.payment__cvv-input').style.border="1px solid #e5eaef";
  } else {
    document.querySelector('.payment__cvv-input').style.border="1px solid red";
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

// Функция трансляции выбранного option выбора месяца в стилизованный span
function selectMonth() {
  var selectMonth = document.querySelector('.payment__select-month');
  var selectMonthIndex = selectMonth.options.selectedIndex;
  var selectMonthText = selectMonth.options[selectMonthIndex].text;
  var currentSelectText = document.querySelector('.payment__select-month-default');

  currentSelectText.innerHTML = selectMonthText;
}

// Функция трансляции выбранного option выбора года в стилизованный span
function selectYear() {
  var selectYear = document.querySelector('.payment__select-year');
  var selectYearIndex = selectYear.options.selectedIndex;
  var selectYearText = selectYear.options[selectYearIndex].text;
  var currentSelectText = document.querySelector('.payment__select-year-default');

  currentSelectText.innerHTML = selectYearText;
}

window.onload = function() {
  selectMonth();
  selectYear();
}

// Функция открывания меню
function openMenu() {
  var menuButton = document.querySelector('.page-header__menu-button');
  var pageNav = document.querySelector('.page-header__navigation');

  menuButton.classList.toggle('page-header__menu-button--opened');
  pageNav.classList.toggle('invisible');
}
// Обработчик клика по меню
document.querySelector('.page-header__menu-button').addEventListener('click', openMenu);
