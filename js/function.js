function checkLength (inputString, maxLength) {
  return inputString.length <= maxLength;
}
checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);
checkLength('топот');
checkLength('ДовОд');
checkLength('Кекс');
