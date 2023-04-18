# Shareme app
### `사람들과 서로 메세지를 공유하는 SNS 서비스`
---------
## 프로젝트 개요
  - 개발 기간 : 2023-4-10 ~ 2023-04-15
  - 깃허브 링크: [https://github.com/zzeong315/shareme-app](https://github.com/zzeong315/shareme-app/)

## 기술스택
`Front-End`

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/ReactHookForm-EC5990?style=flat-square&logo=ReactHookForm&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white"/>
<img src="https://img.shields.io/badge/SWR-lightgray?style=flat-square&logo=SWR&logoColor=white"/>

`Back-End`

<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"/>
<img src="https://img.shields.io/badge/IronSession-black?style=flat-square&logo=Ironsession&logoColor=white"/>


## 실행 방법

1. 프로젝트 레포지토리를 클론합니다.

```sh
$ git clone https://github.com/zzeong315/shareme-app.git
```

2. 프로젝트 실행에 필요한 패키지를 설치합니다.

```sh
$ cd front
$ npm i

$ cd back
$ npm i
```

3. development server을 실행합니다.
```sh
$ npm run dev
# or
$ yarn dev
```

## 주요 기능

### ✏ 사람들과 서로의 일상을 공유할 수 있어요.  

+ 홈
  + 모든 사용자들이 공유한 메세지를 확인 할 수 있음
  + 좋아요, 북마크한 표시를 볼 수 있음
  + 메세지 작성 페이지로 이동하여 메세지를 작성할 수 있음

### 🔖 좋아요, 북마크한 메세지들을 볼 수 있어요.

### ⚙ 내 정보를 간편하게 관리할 수 있어요.
  
+ 프로필
  + 이름, 비밀번호, 색 아바타 수정 가능
  + 내가 쉐어한 메세지들을 볼 수 있음

### 🔐 회원가입, 로그인을 통해 유저의 정보 생성, 확인등이 가능해요. 
+ 회원가입
  + 색 아바타, 이름, 이메일, 비밀번호의 유저 정보를 받음
  + 원하는 조건에 충족하지 못 할 경우 메세지로 알림
+ 로그인
  + 이메일, 비밀번호로 로그인


## 파일 구조
```
├── components
│   ├── answer.tsx
│   ├── avatar.tsx
│   ├── avatarRadio.tsx
│   ├── button.tsx
│   ├── floating-button.tsx
│   ├── icons
│   │   ├── back.tsx
│   │   ├── bookmark.tsx
│   │   ├── heart.tsx
│   │   ├── home.tsx
│   │   ├── logo.tsx
│   │   ├── plus.tsx
│   │   ├── reply.tsx
│   │   └── user.tsx
│   ├── input.tsx
│   ├── layout.tsx
│   ├── textarea.tsx
│   └── tweet.tsx
├── lib
│   ├── db.ts
│   ├── timeChanger.ts
│   ├── useGetCheck.ts
│   ├── useMutation.ts
│   ├── useUser.ts
│   ├── utils.ts
│   ├── withHandler.ts
│   └── withSession.ts
├── pages
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── api
│   │   ├── posts
│   │   │   ├── [id]
│   │   │   │   ├── answer.ts
│   │   │   │   ├── bookmark.ts
│   │   │   │   ├── fav.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── user
│   │       ├── confirm.ts
│   │       ├── enter.ts
│   │       └── me
│   │           ├── bookmarks.ts
│   │           ├── favs.ts
│   │           ├── index.ts
│   │           └── shares.ts
│   ├── create-account.tsx
│   ├── index.tsx
│   ├── log-in.tsx
│   ├── profile
│   │   ├── bookmarks.tsx
│   │   ├── edit.tsx
│   │   ├── index.tsx
│   │   └── likes.tsx
│   └── tweet
│       ├── [id].tsx
│       └── write.tsx
├── prisma
│   ├── dev.db
│   ├── migrations
│   │   ├── 20230413014407_shareme_db
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── types
│   └── iconProps.ts
├── README.md
├── global.css
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
└── yarn.lock
```