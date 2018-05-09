# CleanNaver


### 만들게된 계기
네이버 뉴스를 볼때면 하단의 댓글들이 너무 지저분해서 기분이 매우 언짢습니다. 
개인적으로는 댓글에 안좋은 내용이 있을걸 알면서도 스크롤을 내리게 되더라구요. 
그래서 크롬 익스텐션을 만들었습니다. 
이 익스텐션을 설치하면 기본적으로 뉴스 하단의 댓글을 가려줍니다. 
그리고 보고싶을 경우에는 '보이기' 버튼을 누르면 됩니다.

[( 크롬 익스텐션 바로 가기 : Install Chrome Extension )](
https://chrome.google.com/webstore/detail/clean-naver/dfbinefheanbhakekbeijfegpfapkemd?hl=ko)


<br>
<br>
<hr>
<br>

### 앞으로의 방향
처음 시작은 네이버 뉴스의 댓글로 인해 시작했지만, 앞으로 한국인이 자주 사용하는 네이버를 깨끗하게 사용할수 있는 익스텐션으로 키워갈 생각입니다.

<br>
<br>
<hr>
<br>

### 개발 참여 방법

#### 1. 관련 모듈 인스톨
```js
$ npm install
```

#### 2. 파일 수정후 빌드
```js
$ npm run build
```

#### 3. 파일 추가시
추가한 파일을 webpack.config.js의 entry 배열에 추가해줍니다.
```js
# webpack.config.js

module.exports = {
  mode: 'development',
  target: 'web',
  entry: [
    './src/js/comment-manager.js',
    './src/js/ad-manager.js'
  ],
  ....
};
```


#### 4. 크롬 익스텐션 자동 새로고침
```
일반적으로 코드를 수정하면 기존에 깔려있던 익스텐션을 지우고, 다시 불러오는 작업을 해야한다.
hot-reload.js(개인적인 수정)와 webpack을 연동하여 이러한 작업을 자동화 시켰다.
```

##### 1) ***webpack -w*** 모드 실행
```js
$ npm run start
```

##### 2) 크롬 브라우저로 테스트 하려는 사이트 접속 (ex. http://news.naver.com/example)

##### 3) 해당 사이트 탭을 켜놓은 상태로 코드 작업 시작

##### 4) 코드 수정 후, 저장하면 webpack이 'dist/bundle.js'로 번들링하고 이 순간 크롬 익스텐션이 재로딩


* [hot-reload.js](https://github.com/xpl/crx-hotreload)

<br>
<br>
<hr>
<br>


## 개발이 완료되면 pull request를 날려주세요 :)