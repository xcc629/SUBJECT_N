# 과제 프로젝트

프론트부문 과제로 주어진 프로젝트를 개발하였습니다.

## 설치 및 시작

### 1. env 파일추가

메일에 첨부되어 있는 텍스트 파일의 내용을 복사한 후, 

`.env.development`로 이름 붙인 파일을 생성하여서
가장 상위에 위치하게 해주시면 감사드리겠습니다.

<br/>
(파일이 정상적이지 않을 경우를 대비하여, 메일에 첨부된 노션에 .env파일 내용을 작성해두었으니 참고해주시면 감사하겠습니다.)

> 참고: 파일 구성
>
> ![파일 구성](https://user-images.githubusercontent.com/85507868/177072222-b1afc1cd-35b3-46ce-ba45-2df66fa353e4.png)

<br/>

### 2. 설치, 빌드

```
npm i
```

스크립트로 설치를 진행한 후 아래 스크립트로 빌드를 한 번 진행해주세요.

```
npm run build
```

<br/>

### 3. 실행

아래 스크립트로 실행하면 `localhost:3000`에 로그인 페이지가 나타나면 정상 설치및 실행 된 것입니다. 만약 정상적으로 로그인 기능이 작동하지 않는다면, 빌드를 한번 더 진행해주시면 감사하겠습니다.

```
npm run start
```

<br/>

---

<br/>

## 사용 스택

### 기본

    typeScript(ver 4.7.4), React(ver 18.2.0)
    React-Router-dom(ver 6.3.0)

### 코드스타일

    prettier(ver 2.7.1), eslint(ver 8.18.0), stylelint-prettier(ver 2.0.0)

- .prettierrc 파일 생성 후 규칙을 설정하였습니다.
- .eslintrc 파일과 eslint-config-airbnb 룰을 사용하여 규칙을 설정하였습니다.
- .stylelintrc 파일과 stylelint-config-prettier 로 규칙을 설정하였습니다.

### css 프레임워크

    MUI(ver 5.8.6), emotion-react(ver 11.9.3)

### 상태관리 라이브러리

    Redux(ver 4.2.0), react-redux(ver 8.0.2), reduxjs-toolkit(ver 1.8.3)

### 버전 및 프로젝트 관리

    git, github

### 기타

    redux-logger(ver 3.0.6)

<br/>

---

<br/>

## 구현 목록

### 1. 로그인 페이지

인증정보

- [x] access_token / sesstion_id
      구현
- [x] 이메일, 비밀번호 유효성 검사
- [x] 로그인 후 탭 내 유지

      (* 유저이메일을 전역상태로 관리하여, 새로고침하면 로그인이 리셋되도록 구현되어 있습니다.)

  <br/>

### 2. movie 목록 조희 페이지

- [x] 목록 리스트

<br/>

### 3. 검색 페이지

검색 카테고리에 따라 다른 뷰가 보이도록 구현하였습니다.

- [x] 'Movie' 검색
- [x] 'people' 검색
- [x] 'tv' 검색

<br/>

---

<br/>

## 시연영상

기능작동하는 영상을 짧게 녹화해보았습니다. 아래 링크를 클릭하시면 시연영상을 보실 수 있습니다.

- 링크:
  https://youtu.be/Zh70Hzb-wrk
