# How-much-do-we-change?
해외여행 시 항상 식비 예산을 짜는 데 가장 오랜 시간이 걸린다는 점에서 착안하여 제작한, 사용자의 여행 스타일에 따라 적절한 식비를 계산하고 환율을 알려주는 웹 페이지입니다.
환율 API와 빅맥 지수 기반으로 데이터를 산출합니다. 


## Contents
- [Description](#Description)
- [Folder Structure](#Folder-Structure)
- [Technologies](#Technologies)
- [Tools](#Tools)
- [Data Sources](#Data-Sources)
- [Page Features](#Page-Features)
- [How To Use](#How-To-Use)

## Description
How-much-do-we-change?는 사용자의 여행 스타일에 따라 적절한 환전량을 제공하는 웹 페이지 입니다.  
빅맥 지수 지원 국가 중 여행국을 선택한 뒤 여행 스타일을 선택하면 이에 맞는 식비를 계산하여 제공합니다.  
웹 페이지는 반응형으로 제작되었으며 결과 값을 클립보드에 복사하여 여행 동행인과 공유할 수 있는 기능을 포함하고 있습니다.  
React, Styled-component를 활용하여 구현하였습니다.  
현재 해당 프로젝는 firebase를 통해 배포된 상태입니다.  
🚨현재 프로젝트 진행 당시 사용했던 api의 서비스 중단으로 결과 값을 확인하실 수 없습니다. (추후 수정 예정)🚨

## Folder Structure

```bash
📦How-much-do-we-change
 ┣ 📂.firebase                   # Firebase 호스팅 설정
 ┣ 📂.git                        # Git 버전 관리 설정
 ┣ 📂public                      # index.html 등의 공개 파일
 ┣ 📂src                         # 소스 파일
 ┃ ┣ 📂Components                # React 컴포넌트
 ┃ ┃ ┣ 📂MainPage                # 메인 페이지 특화 컴포넌트
 ┃ ┃ ┣ 📂Pages                   # 페이지 컴포넌트
 ┃ ┃ ┣ 📂ResultPage              # 결과 표시용 컴포넌트
 ┃ ┃ ┗ 📜styled.js               # styled-components 파일
 ┃ ┣ 📂Data                      # 데이터 파일, 빅맥 지수 (JSON) 포함
 ┃ ┣ 📂States                    # React 상태 관리
 ┃ ┗ 📂Utils                     # API 호출을 포함한 유틸리티 함수
 ┣ 📜README.md                   # 프로젝트 문서화
 ┣ 📜firebase.json               # Firebase 설정 파일
 ┗ 📜package.json                # NPM 패키지 및 프로젝트 메타데이터

```

## Technologies
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white" /> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/> 


## Tools
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"/>

### etc
 country-iso-3-to-2 : 국가코드를 3자리에서 2자리 형태로 변환하는 라이브러리입니다.  
 iso-countries-languages : 국가코드에 맞는 국가명을 선택 언어로 변환하는 라이브러리입니다. 


## Data Sources

### API
프로젝트에서는 외부 API를 사용하여 데이터를 가져왔습니다.
- 환율 계산 api : https://github.com/fawazahmed0/exchange-api

### Big mac index Data
빅맥 지수에 대한 데이터는 정적 파일로 제공되므로 json 파일로 변환하여 데이터를 사용하였습니다. 
- 빅맥 지수 : https://github.com/TheEconomist/big-mac-data


## Page Features
0. 공통 사항
      - 반응형 웹 페이지 제작
       - styled-components를 이용하여 전역 스타일 선언 및 사용
1. Main Page
      - 페이지 소개
        - 끼니 계산법에 대한 소개 모달 (무박 포함의 경우, 1박 2일의 경우, n박 n+1박의 경우의 식사 계산법 소개)
      - 여행 국가 선택 select box
        - 빅맥 지수 데이터에서 3자리의 iso를 받아 'countr-iso-3-to-2' 라이브러리를 이용하여 2자리로 변환
        - 2자리 국가코드를 'iso-countries-languages'라이브러리를 통해 한국 국가명으로 변환       
      - 여행 일정 선택
        - input 박스를 통하여 사용자의 여행 일정 데이터 관리
        - 라디오 박스를 이용하여 한 끼에 대한 소비 유형 선택 
      - 결과보기 버튼
        - 사용자가 선택한 데이터(국가코드, 일정, 여행스타일)를 query string으로 전달 후 결과 페이지로 이동
        - 입력값 중 빈 값이 있을 경우 비활성화 처리 
  2. Result Page
      - 검색 결과 도출
        - query string 문자값을 searchParams로 받아와 이에 맞게 계산 함수에 변수 전달
        - 국가, 일정, 총 끼니 수, 빅맥 가격, 한화 , 외화 총 환전량 추천 금액까지 렌더링
        - 다시 계산하기로 메인 페이지 이동
        - 친구에게 공유하기 버튼으로 url을 클립보드에 복사
        
<div style="display: flex; justify-content: space-around; align-items: center;">
  <img src="https://github.com/leeraquel/How-much-do-we-change/assets/121611906/3fc24e95-5831-4e94-b633-70705bcae314" width="60%">
  <img src="https://github.com/leeraquel/How-much-do-we-change/assets/121611906/b62c9c54-21ab-482d-8a96-345eaae04778" width="20%">
</div>


## How To Use

 프로젝트를 개발하기 위해 다음 단계를 따라주세요.
 로컬에서 복사본을 실행하기 위한 간단한 단계입니다.

 ### 1. 이 프로젝트를 클론합니다.
```bash
git clone https://github.com/leeraquel/How-much-do-we-change.git
```
  ### 2. npm 패키지를 설치합니다.
```
npm install
```
  ### 3. 개발 서버를 시작합니다. 
```
npm start
```

  - 동작 구현을 보시려면 배포 링크를 참고해주세요. 
  ### 배포
   - 이 프로젝트는 [Firebase](https://firebase.google.com/)를 사용하여 배포되었습니다.
     - **URL**: https://how-much-do-we-change.web.app/
     
       
  ### 테스트
   - 프로젝트에는 자동화된 테스트가 포함되어 있지 않습니다. 그러나 각 파일에 대한 수동 테스트를 진행할 수 있습니다.



