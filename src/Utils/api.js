import bigMac from '../Data/BigMacIndex.json'

const isoCountriesLanguages = require('@hotosm/iso-countries-languages');


//iso코드에 맞는 한글 국가명 뱉어내는 함수
export function getCountryNameByIsoCode(code){
  if(code === 'EU') {
    return '유로 사용국 (프랑스, 이탈리아 등)'
  }
  else if( code === 'HK'){
    return '홍콩 ・ 마카오'
  }
  else {
    return isoCountriesLanguages.getCountry('ko',code)
  }
}

//통화코드와 일치하는 국가객체 뱉어내는 함수
function getCountryObjByCurrencyCode(currencyCode) {
  return bigMac.find((e)=> e.currency_code === currencyCode)
}

//그 객체에서 iso 코드 뱉어내는 함수
export function getCountryIsoCodeByCurrencyCode(currencyCode) {
  const countryCode = getCountryObjByCurrencyCode(currencyCode).iso_a2;
  return countryCode
}

//숫자 변환기
export function convertStringToNumber(str) {
  return parseInt(str)
}
//타입에 따라 뱉어내는 멘트
export function translateType(type) {
  if (type === 1) {
    return '초절약'
  }
  else if (type === 2) {
    return '맛집러'
  }
  else {
    return '럭셔리'
  }

}

//끼니 계산기
export function calculateMeals(n,d){
  if( n === 1 && d === 2) {
    return 4
  }
  else if ( d-n === 1) {
    return (d -2)*3 + 4
  }
  else if (d - n >= 2) {
    return (d-2)*3 + 2
  }
}

//빅맥가격 가져오기
export function getBigMacLocalPrice(currencyCode){
  const localPrice = getCountryObjByCurrencyCode(currencyCode).local_price;
  return localPrice
}

export const copyToClipboard = () => {
  const currentURL = window.location.href;
  return navigator.clipboard.writeText(currentURL);
};
