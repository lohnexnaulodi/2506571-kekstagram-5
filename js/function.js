function checkLength (inputString, maxLength) {
  return inputString.length <= maxLength;
}
checkLength('проверяемая строка', 20);
checkLength('проверяемая строка', 18);
checkLength('проверяемая строка', 10);

function isPalindrome(input) {
  const normalizedStr = input.replace(/s/g, '').toLowerCase();
  const halfLength = Math.floor(normalizedStr.length / 2);
  for (let index = 0; index < halfLength; index++) {
    if (normalizedStr[index] !== normalizedStr[normalizedStr.length - 1 - index]) {
      return false;
    }
  }
  return true;
}


isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
