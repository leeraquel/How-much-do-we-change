export async function fetchData(currencyCode) {
  try {
    const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyCode}/krw.min.json`);
    const data = await response.json();
    const krwValue = data.krw;
    // return krwValue
    if( krwValue < 1 ) {
      const result = krwValue.toFixed(2)
      return result
    }
    else {
      const result = Math.round(krwValue)
      return result
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}