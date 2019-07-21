export const parseData = (str) => {
  // unstringified text obj, JSON.parse doesn't work
  
  // replace whitespace, \n, etc with regex
  let newStr = str.replace(/\s/g, '');

  // slice off extra text around the important data
  newStr = newStr.slice(9, newStr.length - 3);

  // process string into an object
  let convertToObj = newStr.split(',');
  const result = {};

  for (let pair of convertToObj) {
    pair = pair.split(':');
    result[pair[0]] = pair[1];
  }

  // add dollar sign to profit and shorthand M
  result.totalProfit =
    '$' + result.totalProfit.slice(0, 2) + 'M';

  // convert to percentage
  result.BrandPopularity =
    '+' + parseFloat(result.BrandPopularity) * 100 + '%';
  return result;
}
