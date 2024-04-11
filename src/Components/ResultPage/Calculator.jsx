import data from '../../Data/BigMacIndex.json'


var isoCountriesLanguages = require('@hotosm/iso-countries-languages');


export default function GetCountryName() {

  const AEUKorean = isoCountriesLanguages.getCountry('ko', 'US');
  console.log(AEUKorean);

  let result = [];
  data.map((e)=> {
    if (e.iso_a2 === 'EU') {
      result.push('유로 사용 유럽 국가들 ex)프랑스, 벨기에, 이탈리아')
    }

    else if (e.iso_a2 === 'HK') {
      result.push('홍콩, 마카오')}

    else  {
      result.push(isoCountriesLanguages.getCountry('ko',e.iso_a2))
    }
    return result
  })


  return (
    <>
      <div>
        {AEUKorean}
      </div>
      <select style={{width:'500px', fontSize:'20px', height:'70px', borderRadius:'10px', textAlign:'center'}} className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
      {result.map((e) => {return (<option value={e}>{e}</option>)})}
      </select>
    </>
  )
}