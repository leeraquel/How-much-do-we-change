import styled from "styled-components";

const size = {
  mobile: "768px",
  desktopSmall: "992px",
  desktop: "1100px",
};

export const device = {
  small: `(max-width: ${size.mobile})`,
  medium: `(max-width: ${size.desktopSmall})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const ContentSection = styled.section`

  background-image: url('https://i.pinimg.com/originals/2a/98/d8/2a98d8b6ef7ff66ddcb115c1beb2ffa0.jpg');
  background-position: center;
  background-size: cover;

  @media all and (${device.medium}) {
    height: 100%;
  }

`;

export const SectionWrapper = styled.div`
  padding: 30px 0;
  max-width: 1060px;
  width: 87.72%;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  @media all and (${device.small}) {
    border-radius: 10px;
    padding: 20px;
    height: 100%
  }
`;

export const DescriptionBox = styled.h5`
  text-align: center;
  margin: 0px 5px 0 0;
  font-size: 0.9em;
  flex-shrink: 0;
  width: 100%;
  @media all and (${device.medium}) {
  font-size: 0.7em;
  margin: 0 3px 0 0;
  padding: 0px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  @media all and (${device.medium}) {
    -ms-flex-direction: column;
    -ms-margin-bottom: 10px;
    -webkit-margin-bottom: 10px;
    -webkit-flex-direction: column;
    margin-bottom: 10px;
    flex-direction: column;
  }
`
export const ButtonWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  text-align: center;
  border-radius: 30px;
  font-size: 15px;
  @media all and (${device.medium}) {
    font-size: 13px;
  }
`
export const Label = styled.h3`
  text-align: center;
  margin-bottom: 0px;
  font-size: 19px;
  @media all and (${device.medium}) {
    font-size: 15px;

    }
`
export const ResultValue = styled.h2`
  text-align: center;
  margin: 0 10px;
  background-color: white;
  border-radius: 10px;
  border: solid 1px skyblue;
  padding: 5px 15px;
  @media all and (${device.medium}) {
    font-size: 15px;
    }
`

export const RadioDesc = styled.p`
  text-align: center;
  font-size:14px;
  @media all and (${device.medium}) {
    -ms-font-size: 13px;
    -ms-margin-bottom: 10px;
    -webkit-margin-bottom: 10px;
    -webkit-flex-direction: column;
    }
`

export const RowFlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
export const Div = styled.div`
  text-align: center;
  margin-bottom: 40px;
`
export const FilledBreakfast = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(255, 217, 236, 1);
  z-index: 9999;
  min-height: 28px;
  min-width: 30px;
  text-align: center;
  font-size: 8px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FilledLunch = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(250, 244, 192, 1);
  z-index: 9999;
  min-height: 28px;
  min-width: 30px;
  text-align: center;
  font-size: 8px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FilledDinner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(206, 251, 201, 1);
  z-index: 9999;
  min-height: 28px;
  min-width: 30px;
  text-align: center;
  font-size: 8px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DayBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  padding: 0px 5px;

`

export const MealBox = styled(Div)`
  width:100%;
  min-height: 80px;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

