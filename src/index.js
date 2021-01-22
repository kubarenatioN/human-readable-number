module.exports = toReadable

function toReadable(number) {
  const interpretations = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  }
  if (number == 0) {
    return 'zero'
  }
  else if(number == 100) return 'one hundred'
  if (interpretations[number] == undefined) {
    number = number.toString()
    
    if (number.length == 3) {
      let hundreds = number[0]
      let decimals = number % 100
      if (interpretations[decimals] == undefined) {
        decimals = Math.trunc(decimals / 10) * 10
        let ones = number[2]
        return interpretations[hundreds] + ' ' + interpretations[100] + ' '
          +
          interpretations[decimals] + ' '
          +
          interpretations[ones]
      }
      else if(decimals == 0){
        return interpretations[hundreds] + ' ' + interpretations[100]
      }
      else {
        return interpretations[hundreds] + ' ' + interpretations[100] + ' '
          +
          interpretations[decimals]
      }
    }
    else if (number.length == 2) {
      let decimals = Math.trunc(number / 10) * 10
      let ones = number % 10
      return interpretations[decimals] + ' '
        +
        interpretations[ones]
    }
  }
  return interpretations[number]
}