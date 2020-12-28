/*
take a number , output string with commas
take a string with commas, output number
take a number output approximation in words
take a approximation, output number
 */

const GetNumberWithCommas = (number) => {
  if (Number.isNaN(number)) {
    throw new Error('given parameter is not a number');
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const GetNumberFromCommaSeparatedNumber = (numberString) => {
  const parsedNumber = numberString.replace(/,/g, '');
  if (Number.isNaN(parsedNumber)) {
    throw new Error('given parameter is not a number');
  }
  return parseFloat(parsedNumber);
};

const ApproximateNumberInWords = (value) => {
  if (Number.isNaN(value)) {
    throw new Error('given parameter is not a number');
  }
  if (value <= 1000) {
    return Math.round(value);
  }
  if (value >= 1000 && value < 100000) {
    return `${Math.round((value / 1000) * 100) / 100}K`;
  }
  if (value >= 100000 && value < 10000000) {
    return `${Math.round((value / 100000) * 100) / 100} L`;
  }

  return `${Math.round((value / 10000000) * 100) / 100} Cr`;
};

export { GetNumberWithCommas, GetNumberFromCommaSeparatedNumber, ApproximateNumberInWords };
