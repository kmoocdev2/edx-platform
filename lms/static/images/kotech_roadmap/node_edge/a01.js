var nodes = [
  { id: 1, label: "Introduction to Artificial Intelligence\n(인공지능 개론)\n인공지능의 기초", shape: VIS_SHAPE, level: 0, color: NORMAL_COLOR, link: "SNUk+SNU048_011k" },
  { id: 2, label: "Introduction to Machine Learning\n(기계학습 개론)\n머신러닝 외 5건", shape: VIS_SHAPE, level: 0, color: NORMAL_COLOR, link: [['머신러닝', 'SNUk+SNU050_011k'], ['Machine Learning for Data Science', 'KoreaUnivK+ku_eng_003'], ['자율주행을 위한 머신러닝', 'SKKUk+SKKU_30'], ['지도학습:회귀(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6db0eec5728b505b13d593'], ['지도학습:분류(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6db194c5728b50b04d5fb3'], ['비지도학습:군집화와 차원축소(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6db210c5728b5081032723']] },
  { id: 3, label: "AI Ethics(인공지능 윤리)\n인격과 로봇 외 2건", shape: VIS_SHAPE, level: 0, color: NORMAL_COLOR, link: [['인격과 로봇', 'CKUk+CORE_CKU03k'], ['포스트휴먼 인문학', 'EwhaK+CORE_EW17002C'], ['인공지능 윤리(서울사이버대, 개발예정)', '']] },

  { id: 4, label: "Introduction to Deep Learning\n(딥러닝 개론)\n딥러닝 개론", shape: VIS_SHAPE, level: 1, color: NORMAL_COLOR, link: "DGUk+DGU_006k+DGU_006k" },
  { id: 5, label: "Advanced Machine Learning\n(고급 기계학습)\n딥러닝 시대에도 필요한 고급 기계학습(성균관대, 개발예정)", shape: VIS_SHAPE, level: 1, color: NULL_COLOR, link: [['딥러닝 시대에도 필요한 고급 기계학습(성균관대, 개발예정)','']] },

  { id: 6, label: "Deep Learning Application and Practice\n(딥러닝 응용 및 실습)\n파이썬으로 배우는 기계학습 입문 외 1건", shape: VIS_SHAPE, level: 2, color: NORMAL_COLOR, link: [['파이썬으로 배우는 기계학습 입문', 'HGUk+HGU05'], ['딥러닝개론 및 응용', '']] },
  { id: 7, label: "Topics in Artificial Intelligence\n(인공지능 연구)\n인공지능 연구 동향(중앙대, 개발예정)", shape: VIS_SHAPE, level: 2, color: NULL_COLOR, link: [['인공지능 연구 동향(중앙대, 개발예정)','']] },
  { id: 8, label: "Topics in Machine Learning\n(기계학습 연구)\n딥러닝의 깊이 있는 이해를 위한 머신러닝(중앙대, 개발예정)", shape: VIS_SHAPE, level: 2, color: NULL_COLOR, link: [['딥러닝의 깊이 있는 이해를 위한 머신러닝(중앙대, 개발예정)','']] },

  { id: 9, label: "Introduction to Robotics\n(로봇공학 개론)\nFun-MOOC - 기계는 영원하다!", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: "SNUk+SKP.M2794.000100k" },
  { id: 10, label: "Reinforcement Learning\n(강화학습)\n강화학습의 수학적 기초와 알고리즘 이해(고려대, 개발예정)", shape: VIS_SHAPE, level: 3, color: NULL_COLOR, link: [['강화학습의 수학적 기초와 알고리즘 이해(고려대, 개발예정)','']] },
  { id: 11, label: "Knowledge-Based AI(지식기반 인공지능)\n추론응용 모델링 (Match業 강좌)\n", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: [['추론응용 모델링 (Match業 강좌)', 'http://www.abedu.co.kr/AI/lecture/ps/7/is/16']] },
  { id: 12, label: "Economics and Computation\n(계량경제학)\n계량경제학", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: "JEJUk+KOCW_JEJU01" },
  { id: 13, label: "Introduction to Cognitive\nScience(인지과학 개론)\n인간 뇌의 이해", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: "SNUk+SNU047_019k" },

  { id: 14, label: "Biomedical Computing\n(생의학 컴퓨팅)\n바이오메디컬비전 및 응용 외 2건", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: [['바이오메디컬비전 및 응용', 'SoongsilUnivK+soongsilmooc03K'], ['생명정보개론', 'SoongsilUnivK+soongsilmooc01K'], ['의공학-생명과 공학의 만남', 'POSTECHk+CITE241']] },
  { id: 15, label: "Artificial Intelligence for Robotics\n(로봇공학을 위한 인공지능)\nMobile Robot Perception and Navigation", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: "SEOULTECHk+SMOOC04k" },
  { id: 16, label: "Computer Vision\n(컴퓨터비전)\n딥러닝 영상분석(Match業 강좌) 외 1건", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: [['딥러닝 영상분석(Match業 강좌)', 'http://www.abedu.co.kr/AI_MF/lecture/ps/4/is/6'], ['영상처리와 패턴인식', 'SMUk+FD_SMU03']] },
  { id: 17, label: "Natural Language Processing\n(자연어처리)\n텍스트 마이닝 실전 및 분석 외 1건", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: [['텍스트 마이닝 실전 및 분석', 'YSUk+FD_YSU_LIS01k'], ['빅데이터와 텍스트마이닝', 'SejonguniversityK+SJMOOC10K']] },
  { id: 18, label: "Linguistics(언어학)\n언어와 인간", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: "SNUk+CORE_SNU041_040k" },
  { id: 19, label: "Probabilistic Graphical Models\n(확률적 그래픽 모델)\n확률적 그래픽 모델(지능정보산업협회, 개발예정)", shape: VIS_SHAPE, level: 4, color: NULL_COLOR, link: [['확률적 그래픽 모델(지능정보산업협회, 개발예정)','']] },
  { id: 20, label: "Artificial Intelligence for Business\n(비즈니스를 위한 인공지능)\n비즈니스를 위한 인공지능(성신여대, 개발예정)", shape: VIS_SHAPE, level: 4, color: NULL_COLOR, link: [['비즈니스를 위한 인공지능(성신여대, 개발예정)','']] },
  { id: 21, label: "Computational Cognitive Science\n(전산 인지과학)\n전산 인지과학 및 인간지능과 인공지능(지능정보 산업협회, 개발예정)", shape: VIS_SHAPE, level: 4, color: NULL_COLOR, link: [['전산 인지과학 및 인간지능과 인공지능(지능정보 산업협회, 개발예정)','']] },

  { id: 22, label: "Computer Graphics\n(컴퓨터그래픽)\n영상처리와 패턴인식\n", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: "SMUk+FD_SMU03" },
  { id: 23, label: "Computer Graphics\n(컴퓨터그래픽)\n영상처리와 패턴인식", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: "SMUk+FD_SMU03" },
  { id: 24, label: "Applied Artificial Intelligence\n(인공지능 응용)\n빅데이터와 인공지능의 응용 외 6건", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: [['빅데이터와 인공지능의 응용', 'SNUk+SNU052_011k'], ['바이오헬스 빅데이터 마이닝', 'KKUk+CK_KKUkbio002'], ['경영데이터마이닝', 'HYUk+HYUBUS3099k'], ['빅데이터와 머신러닝 소프트웨어', 'SNUk+SNU051_011k'], ['클라우드 컴퓨팅과 인공지능', 'KoreaUnivK+ku_eng_006'], ['ICBM+AI 기술을 접목한 리빙랩 설계 입문', 'KoreaUnivK+ku_eng_007'], ['자율주행 자동차용 인공지능 시스템(현대 NGV, 개발예정)', '']] },
  { id: 25, label: "Game AI(게임인공지능)\n게임인공지능", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: "SejonguniversityK+SJKMOOC04k" },
  { id: 26, label: "Speech Recognition(음성 인식)\n개발예정강좌", shape: VIS_SHAPE, level: 5, color: NULL_COLOR, link: [['개발예정','']] },
];
var edges = [
  { from: 1, to: 2, color: { opacity: OP_HIGH } },

  { from: 1, to: 4, color: { opacity: OP_LOW } },
  { from: 2, to: 4, color: { opacity: OP_HIGH } },
  { from: 5, to: 4, color: { opacity: OP_LOW } },

  { from: 2, to: 5, color: { opacity: OP_MID } },

  { from: 1, to: 6, color: { opacity: OP_HIGH } },
  { from: 4, to: 6, color: { opacity: OP_HIGH } },

  { from: 2, to: 7, color: { opacity: OP_MID } },
  { from: 5, to: 7, color: { opacity: OP_LOW } },

  { from: 5, to: 8, color: { opacity: OP_MID } },

  { from: 7, to: 9, color: { opacity: OP_MID } },

  { from: 6, to: 10, color: { opacity: OP_HIGH } },
  { from: 2, to: 10, color: { opacity: OP_HIGH } },
  { from: 5, to: 10, color: { opacity: OP_HIGH } },

  { from: 1, to: 11, color: { opacity: OP_HIGH } },

  { from: 1, to: 12, color: { opacity: OP_MID } },
  { from: 2, to: 12, color: { opacity: OP_MID } },

  { from: 9, to: 14, color: { opacity: OP_MID } },
  { from: 10, to: 14, color: { opacity: OP_MID } },

  { from: 9, to: 15, color: { opacity: OP_MID } },
  { from: 1, to: 15, color: { opacity: OP_MID } },
  { from: 2, to: 15, color: { opacity: OP_MID } },
  { from: 24, to: 15, color: { opacity: OP_MID } },

  { from: 6, to: 16, color: { opacity: OP_HIGH } },
  { from: 4, to: 16, color: { opacity: OP_MID } },
  { from: 1, to: 16, color: { opacity: OP_MID } },
  { from: 2, to: 16, color: { opacity: OP_MID } },

  { from: 7, to: 17, color: { opacity: OP_MID } },
  { from: 1, to: 17, color: { opacity: OP_HIGH } },
  { from: 2, to: 17, color: { opacity: OP_MID } },
  { from: 8, to: 17, color: { opacity: OP_HIGH } },
  { from: 18, to: 17, color: { opacity: OP_HIGH } },

  { from: 11, to: 19, color: { opacity: OP_MID } },

  { from: 12, to: 20, color: { opacity: OP_MID } },

  { from: 2, to: 21, color: { opacity: OP_MID } },
  { from: 13, to: 21, color: { opacity: OP_MID } },

  { from: 9, to: 23, color: { opacity: OP_MID } },
  { from: 16, to: 23, color: { opacity: OP_MID } },

  { from: 6, to: 24, color: { opacity: OP_HIGH } },
  { from: 1, to: 24, color: { opacity: OP_MID } },
  { from: 2, to: 24, color: { opacity: OP_HIGH } },

  { from: 1, to: 25, color: { opacity: OP_MID } },

  { from: 2, to: 26, color: { opacity: OP_MID } },
];