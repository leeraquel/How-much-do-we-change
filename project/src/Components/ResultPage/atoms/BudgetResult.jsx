import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { ResultValue, Label, RowFlexDiv} from '../../styled';
import { fetchData } from '../../../Utils/fetchData';
import { exchangeResultState} from '../../../States/exchangeResultState';
import { calculateMeals, getBigMacLocalPrice} from '../../../Utils/api'
import { countryState } from '../../../States/countryState';
import { daysState } from '../../../States/daysSate';
import { nightsState } from '../../../States/nightsState';
import { typeState } from '../../../States/typeState';
import { device } from '../../styled';

function BudgetResult() {
  const [exchangeResult, setExchangeResult] = useRecoilState(exchangeResultState);
  const [country] = useRecoilState(countryState);
  const [days] = useRecoilState(daysState);
  const [nights] = useRecoilState(nightsState);
  const [type] = useRecoilState(typeState);
  const currencyCode = country
  const meals = calculateMeals(nights, days);
  const localPrice = getBigMacLocalPrice(currencyCode);
  const times = type

  const lowerCode = currencyCode.toLowerCase();

  useEffect(() => {
    async function getData() {
      try {
        const finalResult = await fetchData(lowerCode);
        setExchangeResult(finalResult);
      } catch (error) {
        console.log('error', error);
      }
    }
    getData();
  }, [lowerCode, setExchangeResult]);

  const totalBudget = Math.round(exchangeResult * meals * localPrice * times);
  const localBudget = (meals * localPrice * times).toFixed(2);
  return (
    <div>
      <ResultTitle>예상 식비는</ResultTitle>
      <RowFlexDiv>
        <Label>한화로 </Label>
        {totalBudget !== null ? (
        <RowFlexDiv>
          <ResultValue>{totalBudget}</ResultValue>
          <Label>KRW</Label>
        </RowFlexDiv>
        ) : (
          <ResultValue>Loading...</ResultValue>
        )}
      </RowFlexDiv>
      <RowFlexDiv>
        <Label>외화로 </Label>
        {totalBudget !== null ? (
          <RowFlexDiv>
          <ResultValue>{localBudget}</ResultValue>
          <Label>{currencyCode}</Label>
        </RowFlexDiv>
      ) : (
        <span>Loading...</span>
      )}
      </RowFlexDiv>
    </div>
  );
}

const ResultTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  font-size: 25px;
  @media all and (${device.medium}) {
    font-size: 20px;
    margin-bottom: 10px;
    }
`

export default BudgetResult;
