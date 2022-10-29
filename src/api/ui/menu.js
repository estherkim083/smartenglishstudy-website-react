module.exports = [
  {
    key: '리스닝& 리딩& 글쓰기',
    name: '리스닝& 리딩& 영어 글쓰기',
    icon: '',
    child: [
      {
        key: 'Listening',
        name: 'Listening',
        title: true,
      },
      {
        key: '빈칸뚫기연습',
        name: 'Listening',
        link: '/listening'
      },
      {
        key: 'Reading',
        name: 'Reading',
        title: true,
      },
      {
        key: '리딩자료실',
        name: '리딩자료실',
        link: '/reading',
        icon: 'ion-ios-contact-outline'
      },
      {
        key: '리딩단어장',
        name: '리딩단어장',
        link: '/reading/vocab'
      },
      {
        key: 'Writing',
        name: 'Writing',
        title: true,
      },
      {
        key: 'Essay Writing',
        name: 'Essay Writing',
        link: '/writing/essay',
      },
      {
        key: 'Book Writing',
        name: 'Book Writing',
        link: '/writing/book',
      },
      {
        key: '첨삭자료실',
        name: '첨삭자료실',
        link: '/writing/editor',
      }
    ]
  },
  {
    key: '퀴즈(Quiz)',
    name: '퀴즈(Quiz)',
    icon: '',
    child: [
      {
        key: '출제탭',
        name: '출제탭',
        title: true,
      },
      {
        key: '출제하기',
        name: '출제하기',
        link: '/quiz/make-quiz',
      },
      {
        key: '성적',
        name: '성적',
        link: '/quiz/student-score',
      },
      {
        key: '문제풀이실',
        name: '문제풀이실',
        title: true,
      },
      {
        key: '문제풀이실',
        name: '문제풀이실',
        link: '/quiz/take-quiz',
      },
      {
        key: '나의성적',
        name: '나의 성적',
        link: '/quiz/my-score',
      },
    ]
  },
  {
    key: 'VOCAB&QUIZ',
    name: 'VOCAB& QUIZ',
    icon: '',
    child: [
      {
        key: '단어장',
        name: '단어장',
        title: true,
      },
      {
        key: '단어장만들기',
        name: '단어장 만들기',
        link: '/vocab',
      },
      {
        key: '어휘퀴즈',
        name: '어휘퀴즈',
        title: true,
      },
      {
        key: '암기용퀴즈',
        name: '암기용 퀴즈',
        link: '/vocab/quiz-memorization',
      }
    ]
  },
  {
    key: '마이페이지',
    name: '마이페이지',
    icon: '',
    child: [
      {
        key: '친구추가',
        name: '친구추가',
        title: true,
      },
      {
        key: '프로필조회',
        name: '프로필 조회',
        link: '/profile-peer-list',
      },
      {
        key: '친구/그롭조회',
        name: '친구/그룹 조회',
        link: '/my-peer-list',
      },
      {
        key: '메세지',
        name: '메세지',
        title: true,
      },
      {
        key: 'Chat',
        name: 'Chat',
        link: '/chat',
      },
      {
        key: '내프로필',
        name: '내 프로필',
        title: true,
      },
      {
        key: 'MyProfile',
        name: 'MyProfile',
        link: '/my-profile',
      },
      {
        key: 'MyInbox',
        name: 'MyInbox',
        link: '/my-inbox',
      },
    ]
  },
  {
    key: 'ABOUT',
    name: 'ABOUT',
    icon: '',
    child: [
      {
        key: 'ABOUT',
        name: 'ABOUT',
        title: true,
      },
      {
        key: '기능소개',
        name: '기능소개',
        link: '/home',
      },
    ]
  },
];
