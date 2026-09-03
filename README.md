# 전산재료과학연구실 홈페이지 (CMS Lab Website)

국립금오공과대학교 재료공학부 신소재공학전공 전산재료과학연구실(박영태 교수) 공식 홈페이지.
GitHub Pages용 정적 사이트이며, 별도의 빌드 과정 없이 파일을 올리면 바로 동작합니다.

## 배포 방법 (GitHub Pages)

1. github.com 로그인 후 새 저장소를 만듭니다. 저장소 이름을 `<계정명>.github.io`로 하면
   주소가 `https://<계정명>.github.io`가 되고, 다른 이름(예: `cms-lab`)으로 하면
   `https://<계정명>.github.io/cms-lab`이 됩니다.
2. 이 폴더의 모든 파일을 저장소에 업로드합니다 (웹에서 "uploading an existing file" 이용 가능).
3. 저장소 Settings > Pages에서 Branch를 `main`, 폴더를 `/ (root)`로 설정하고 저장합니다.
4. 1~2분 후 주소로 접속하면 사이트가 보입니다.

## 내용 수정 방법

- 논문 추가: `assets/data.js`의 PUBLICATIONS 배열 맨 위에 항목을 복사해 붙여넣고 수정
- 소식 추가: 같은 파일의 NEWS 배열 맨 위에 추가
- 멤버 추가: `members.html`의 카드 블록을 복사해 수정
- 그 외 문구: 각 html 파일에서 `lang-ko`(한국어) / `lang-en`(영어) 스팬을 함께 수정

Claude에게 "논문 하나 추가해줘"처럼 요청해도 됩니다.

## 파일 구성

- index.html — 홈
- research.html — 연구분야 상세
- professor.html — 교수 소개 (경력/학력/수상)
- members.html — 구성원
- publications.html — 논문 목록 (data.js에서 자동 생성)
- news.html — 소식 (data.js에서 자동 생성)
- contact.html — 연락처, 찾아오시는 길, 모집 안내
- assets/style.css — 전체 스타일
- assets/site.js — 내비게이션/푸터/언어 전환/목록 렌더링
- assets/data.js — 논문·소식 데이터
- assets/img/profile.jpg — 교수 프로필 사진
