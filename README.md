# How-much-do-we-change?
해외여행 시 항상 식비 예산을 짜는 데 가장 오랜 시간이 걸린다는 점에서 착안하여 제작한, 사용자의 여행 스타일에 따라 적절한 식비를 계산하고 환율을 알려주는 웹 페이지입니다.
환율 API와 빅맥 지수 기반으로 데이터를 산출합니다. 


## index
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
<img src="https://img.shields.io/badge/JSON-000000?style=flat-square&logo=json&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

## Tools
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"/>

## Data Sources

### API
프로젝트에서는 외부 API를 사용하여 데이터를 가져왔습니다.
- 환율 계산 api :

### Mock Data
오픈 api로 제공해주지 않는 데이터는 프로젝트의 초기 개발 및 테스트를 위해 모의 데이터를 사용하였습니다.


## Page Features

        
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
   - 이 프로젝트는 [Nelfty](https://firebase.com/)를 사용하여 배포되었습니다.
     - **URL**: 
     - **포트 번호**: 3000
       
  ### 테스트
   - 프로젝트에는 자동화된 테스트가 포함되어 있지 않습니다. 그러나 각 파일에 대한 수동 테스트를 진행할 수 있습니다.


## ----------------------------------------------------

