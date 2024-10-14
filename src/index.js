module.exports = function toReadable (number) {
    const oneDigitNum = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tensNum = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twoDigitNum = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const str = String(number);

    const checkOnZero = str[1] === '0' ? '' : ' ';

    if (number === 0) {
        return 'zero';
    }

    if (number < 10) {
      return oneDigitNum[number];
    } else if (String(number).length === 2 && number < 20) {
      return tensNum[str[1]];
    } else if (String(number).length === 2 && number >= 20) {
      return `${twoDigitNum[str[0]]} ${oneDigitNum[str[1]]}`.trim();
    } else if (String(number).length === 3 && str[1] === '1') {
      return `${oneDigitNum[str[0]]} hundred ${tensNum[str[2]]}`.trim();
    } else if (String(number).length === 3) {
      return `${oneDigitNum[str[0]]} hundred${checkOnZero}${twoDigitNum[str[1]]} ${oneDigitNum[str[2]]}`.trim();
    } else {
      return 'error';
    }
}
