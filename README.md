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
 ┣ 📂.firebase
 ┣ 📂public
 ┃ ┣ 📜index.html
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📂MainPage
 ┃ ┃ ┃ ┣ 📂Modal
 ┃ ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┃ ┗ 📂molecular
 ┃ ┃ ┣ 📂Pages
 ┃ ┃ ┃ ┣ 📂MainPage.jsx
 ┃ ┃ ┣ 📂ResultPage
 ┃ ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┃ ┣ 📂template
 ┃ ┃ ┃ ┗ 📜Calculator.jsx
 ┃ ┃ ┗ 📜styled.js
 ┃ ┣ 📂Data
 ┃ ┣ 📂States
 ┃ ┣ 📂Utils
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┣ 📜.DS_Store
 ┣ 📜.firebaserc
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜firebase.json
 ┣ 📜package-lock.json
 ┗ 📜package.json
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
 
 ### 0. 개발 환경 설정
  1) Visual Studio Code 설치
   

 ### 1. 이 프로젝트를 클론합니다.
  ```bash
  git clone 
  ```
  ### 2. 프로젝트 디렉토리로 이동합니다.
  ```bash
  cd 
  ```
  ### 3. VSCode를 실행합니다.
  ```bash

  ```
  ### 4. 프로젝트를 로컬 서버에서 실행합니다. (예: Live Server VSCode extension 사용)
  
 
  - 동작 구현을 보시려면 배포 링크를 참고해주세요. 
  ### 배포
   - 이 프로젝트는 [Nelfty](https://nelfty.com/)를 사용하여 배포되었습니다.
     - **URL**: [green-way-seoul(https://green-way-seoul.netlify.app/)
     - **포트 번호**: 5500
       
  ### 테스트
   - 프로젝트에는 자동화된 테스트가 포함되어 있지 않습니다. 그러나 각 파일에 대한 수동 테스트를 진행할 수 있습니다.


## ----------------------------------------------------
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
