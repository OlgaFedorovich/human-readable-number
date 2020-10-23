module.exports = function toReadable (number) {
    let readableNum;
    const singleNum = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
    };

    const hundreds = {
      '1': 'one hundred',
      '2': 'two hundred',
      '3': 'three hundred',
      '4': 'four hundred',
      '5': 'five hundred',
      '6': 'six hundred',
      '7': 'seven hundred',
      '8': 'eight hundred',
      '9': 'nine hundred',
  };

  const tens = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
  };

  const doubleNums = {
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
  };

    let strNumber = number.toString();

    if(strNumber.length === 1) {

        readableNum = singleNum[`${number}`]
    }

    if(strNumber.length === 2) {
        if(strNumber[0] === '1') {
            readableNum = tens[`${number}`]
        } else if (strNumber[1] === '0') {
            readableNum = doubleNums[`${number}`];
        } else {
            readableNum = doubleNums[`${strNumber[0]}0`] + ' ' + singleNum[`${strNumber[1]}`];
        }
    }

    if(strNumber.length === 3) {
        if(strNumber[1] === '0' && strNumber[2] === '0') {
            readableNum = hundreds[`${strNumber[0]}`]
        } else if(strNumber[1] === '0') {
            readableNum = hundreds[`${strNumber[0]}`] + ' ' + singleNum[`${strNumber[2]}`];
        } else if(strNumber[1] === '1') {
            readableNum = hundreds[`${strNumber[0]}`] + ' ' + tens[`${strNumber[1]}${strNumber[2]}`];
        }
         else if(strNumber[1] !== '0' && strNumber[2] === '0') {
            readableNum = hundreds[`${strNumber[0]}`] + ' ' + doubleNums[`${strNumber[1]}0`];
        } else {
            readableNum = hundreds[`${strNumber[0]}`] + ' ' + doubleNums[`${strNumber[1]}0`] + ' ' + singleNum[`${strNumber[2]}`];
        }
    }
    console.log(readableNum);

  return readableNum;

}
