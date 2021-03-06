
var nodes = [
  { id: 1, label: "Introduction Programming for Everyone\n(프로그래밍 개론)\n머신러닝을 위한 파이썬 기초(Match業 강좌)", shape: VIS_SHAPE, level: 0, color: FEED_COLOR, link: "https://iclass.postech.ac.kr/courses/5d6cdd4ec5728b2c694db285" },
  { id: 2, label: "Basic(Highschool)\nMathematics(기초 수학)\n인공지능을 위한 기초수학 입문(성균관대, 개발예정)", shape: VIS_SHAPE, level: 0, color: FEED_COLOR, link: [['인공지능을 위한 기초수학 입문(성균관대, 개발예정)','']] },

  { id: 3, label: "Introduction to Statistics\n(통계학 개론)\n통계학의 이해 I 외 3건", shape: VIS_SHAPE, level: 1, color: FEED_COLOR, link: [['통계학의 이해 I', 'SookmyungK+SM_sta_004k'], ['통계학의 이해 II', 'SookmyungK+SM_sta_009k'], ['[A.I. SERIES] R을 활용한 통계학개론', 'PNUk+RS_C01'], ['머신러닝을 위한 R기초와 통계(Match業 강좌)', 'http://future.cuk.edu/local/paid/application_intro.php?id=3']] },
  { id: 4, label: "Probability and Discrete Mathematics\n(확률과 이산수학)\nMathematical Fundamentals for Data Science", shape: VIS_SHAPE, level: 1, color: FEED_COLOR, link: "KoreaUnivK+ku_eng_002" },
  { id: 5, label: "Calculus(미적분학)\n알고 보면 쉬운 미적분 이론 외 2건", shape: VIS_SHAPE, level: 1, color: FEED_COLOR, link: [['알고 보면 쉬운 미적분 이론', 'POSTECHk+MATH311'], ['미적분학 I - 활용을 중심으로', 'SKKUk+SKKU_EXGB506_01K'], ['미적분학 II-다변수 미적분학', 'SKKUk+SKKU_2017_05-01']] },
  { id: 6, label: "Linear Algebra(선형대수)\n선형대수학 외 3건", shape: VIS_SHAPE, level: 1, color: FEED_COLOR, link: [['선형대수학', 'SKKUk+SKKU_2017_01'], ['쉽게 시작하는 기초선형대수학', 'UOSk+ACE_UOS06'], ['Mathematical Fundamentals for Data Science', 'KoreaUnivK+ku_eng_002'], ['머신러닝을 위한 선형대수와 최적화(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6cde23c5728b29054d5094']] },
  { id: 7, label: "AI Ethics(인공지능 윤리)\n인격과 로봇 외 2건", shape: VIS_SHAPE, level: 1, color: NORMAL_COLOR, link: [['인격과 로봇', 'CKUk+CORE_CKU03k'], ['포스트휴먼 인문학', 'EwhaK+CORE_EW17002C'], ['인공지능 윤리(서울사이버대, 개발예정)', '']] },

  { id: 8, label: "Introduction to CS and Programming\n(컴퓨터과학 개론 및 프로그래밍)\n파이썬 프로그래밍", shape: VIS_SHAPE, level: 2, color: NORMAL_COLOR, link: "HGUk+HGU02" },
  { id: 9, label: "Math for Artificial Intelligence\n(인공지능을 위한 수학)\n머신 러닝을 위한 기초 수학 및 통계\n(Match業 강좌)", shape: VIS_SHAPE, level: 2, color: NORMAL_COLOR, link: [['신 러닝을 위한 기초 수학 및 통계 (Match業 강좌)', 'http://www.abedu.co.kr/AI/lecture/ps/1/is/4']] },

  { id: 10, label: "Object-Oriented Programming\n(객체지향프로그래밍)\n객체지향형 프로그래밍과 자료구조", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: "YeungnamUnivK+YU217001" },
  { id: 11, label: "Data Structures\n(데이터구조)\n자료구조 외 1건", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: [['자료구조(K-MOOC 상명대)', 'SMUk+SMU2018_01'], ['자료구조(K-MOOC 영남대)', 'YeungnamUnivK+YU216002']] },
  { id: 12, label: "Foundations of Data Science\n(데이터사이언스의 기초)\nR 데이터 분석 입문 외 2건", shape: VIS_SHAPE, level: 3, color: NORMAL_COLOR, link: [['R 데이터 분석 입문', 'DKUK+DKUK0003'], ['디지털 시대의 커뮤니케이션', 'PTUk+SF_PMOOC01k'], ['My Major & Big Data', 'SMUk+ACE_SMU01']] },

  { id: 13, label: "Algorithms(알고리즘)\n자료구조 외 1건", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: [['자료구조', 'YeungnamUnivK+YU216002'],['인공지능을 위한 알고리즘과 자료구조: 이론, 코딩, 그리고 컴퓨팅 사고(성균관대, 개발예정)','']] },
  { id: 14, label: "Data Analysis(데이터분석)\n파이썬을 이용한 빅데이터 분석 외 1건", shape: VIS_SHAPE, level: 4, color: NORMAL_COLOR, link: [['파이썬을 이용한 빅데이터 분석', 'SejonguniversityK+SJKMOOC05k'], ['예측 및 분류를 위한 데이터 애널리틱스 기법', 'POSTECHk+IMEN472']] },

  { id: 15, label: "Understanding Artificial Intelligence\n(인공지능의 이해)\nICBM+AI개론", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: "KoreaUnivK+ku_eng_004" },
  { id: 16, label: "Introduction to Artificial Intelligence\n(인공지능 개론)\n인공지능의 기초", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: "SNUk+SNU048_011k" },
  { id: 17, label: "Big Data Analytics\n(빅 데이터 분석)\n빅 데이터 첫 걸음 외 6건", shape: VIS_SHAPE, level: 5, color: NORMAL_COLOR, link: [['빅 데이터 첫 걸음', 'POSTECHk+CSED490k'], ['빅데이터의 세계 원리와 응용', 'EwhaK+EW11237K'], ['빅데이터와 인공지능의 응용', 'SNUk+SNU052_011k'], ['빅데이터와 머신러닝 소프트웨어', 'SNUk+SNU051_011k'], ['빅데이터와 텍스트마이닝', 'SejonguniversityK+SJMOOC10K'], ['빅데이터 분석 및 처리 기술', ''], ['AWS 기반 IoT 빅데이터 실습 및 활용', '']] },

  { id: 18, label: "Introduction to Deep Learning\n(딥러닝 개론)\n딥러닝 개론", shape: VIS_SHAPE, level: 6, color: NORMAL_COLOR, link: "DGUk+DGU_006k+DGU_006k" },
  { id: 19, label: "Introduction to Machine Learning\n(기계학습 개론)\n머신러닝 외 5건", shape: VIS_SHAPE, level: 6, color: NORMAL_COLOR, link: [['머신러닝', 'SNUk+SNU050_011k'], ['Machine Learning for Data Science', 'KoreaUnivK+ku_eng_003'], ['자율주행을 위한 머신러닝', 'SKKUk+SKKU_30'], ['지도학습:회귀(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6db0eec5728b505b13d593'], ['지도학습:분류(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6db194c5728b50b04d5fb3'], ['비지도학습:군집화와 차원축소(Match業 강좌)', 'https://iclass.postech.ac.kr/courses/5d6db210c5728b5081032723']] },

  { id: 20, label: "Deep Learning Application and Practice\n(딥러닝 응용 및 실습)\n파이썬으로 배우는 기계학습 입문 외 1건", shape: VIS_SHAPE, level: 7, color: NORMAL_COLOR, link: [['파이썬으로 배우는 기계학습 입문', 'HGUk+HGU05'], ['딥러닝개론 및 응용', '']] },
  { id: 21, label: "Advanced Machine Learning\n(고급 기계학습)\n딥러닝 시대에도 필요한 고급 기계학습(성균관대, 개발예정)", shape: VIS_SHAPE, level: 7, color: NULL_COLOR, link: [['딥러닝 시대에도 필요한 고급 기계학습(성균관대, 개발예정)','']] },

  { id: 22, label: "Reinforcement Learning\n(강화학습)\n강화학습의 수학적 기초와 알고리즘 이해(고려대, 개발예정)", shape: VIS_SHAPE, level: 8, color: NULL_COLOR, link: [['강화학습의 수학적 기초와 알고리즘 이해(고려대, 개발예정)','']] },
  { id: 23, label: "Topics in Machine Learning\n(기계학습 연구)\n딥러닝의 깊이 있는 이해를 위한 머신러닝(중앙대, 개발예정)", shape: VIS_SHAPE, level: 8, color: NULL_COLOR, link: [['딥러닝의 깊이 있는 이해를 위한 머신러닝(중앙대, 개발예정)','']] },
  { id: 24, label: "Topics in Artificial Intelligence\n(인공지능 연구)\n인공지능 연구 동향(중앙대, 개발예정)", shape: VIS_SHAPE, level: 8, color: NULL_COLOR, link: [['인공지능 연구 동향(중앙대, 개발예정)','']] },

  { id: 25, label: "Computer Vision\n(컴퓨터비전)\n딥러닝 영상분석(Match業 강좌) 외 1건", shape: VIS_SHAPE, level: 9, color: NORMAL_COLOR, link: [['딥러닝 영상분석(Match業 강좌)', 'http://www.abedu.co.kr/AI_MF/lecture/ps/4/is/6'], ['영상처리와 패턴인식', 'SMUk+FD_SMU03']] },
  { id: 26, label: "Human Intelligence and AI\n(인간지능과 인공지능)\n전산 인지과학 및 인간지능과 인공지능(지능정보 산업협회, 개발예정)", shape: VIS_SHAPE, level: 9, color: NULL_COLOR, link: [['전산 인지과학 및 인간지능과 인공지능(지능정보 산업협회, 개발예정)','']] },
  { id: 27, label: "Introduction to Cognitive\nScience(인지과학 개론)\n인간 뇌의 이해", shape: VIS_SHAPE, level: 9, color: FEED_COLOR, link: "SNUk+SNU047_019k" },

  { id: 28, label: "Natural Language Processing\n(자연어처리)\n텍스트 마이닝 실전 및 분석 외 1건", shape: VIS_SHAPE, level: 10, color: NORMAL_COLOR, link: [['텍스트 마이닝 실전 및 분석', 'YSUk+FD_YSU_LIS01k'], ['빅데이터와 텍스트마이닝', 'SejonguniversityK+SJMOOC10K']] },
  { id: 29, label: "Probabilistic Graphical Models\n(확률적 그래픽 모델)\n확률적 그래픽 모델(지능정보산업협회, 개발예정)", shape: VIS_SHAPE, level: 10, color: NULL_COLOR, link: [['확률적 그래픽 모델(지능정보산업협회, 개발예정)','']] },

  { id: 30, label: "Computational Perception\n(계산 인식)\n수학으로 푸는 자율주행 AI(호남대, 개발예정)", shape: VIS_SHAPE, level: 11, color: NULL_COLOR, link: [['수학으로 푸는 자율주행 AI(호남대, 개발예정)','']] },
  { id: 31, label: "Neural Computation\n(신경 계산)\n머신러닝과 신경과학(중앙대, 개발예정)", shape: VIS_SHAPE, level: 11, color: NULL_COLOR, link: [['머신러닝과 신경과학(중앙대, 개발예정)','']] },
  { id: 32, label: "Computational Cognitive Science\n(전산 인지과학)\n전산 인지과학 및 인간지능과 인공지능(지능정보 산업협회, 개발예정)", shape: VIS_SHAPE, level: 11, color: NULL_COLOR, link: [['전산 인지과학 및 인간지능과 인공지능(지능정보 산업협회, 개발예정)','']] },
  { id: 33, label: "Inference and Information\nTheory\n(추론 및 정보이론)\n데이터 과학을 위한 R 프로그래밍(포항공대, 개발예정)", shape: VIS_SHAPE, level: 11, color: NULL_COLOR, link: [['데이터 과학을 위한 R 프로그래밍(포항공대, 개발예정)','']] },
];
var edges = [
  { from: 2, to: 4, color: { opacity: OP_HIGH } },
  { from: 5, to: 4, color: { opacity: OP_HIGH } },

  { from: 2, to: 5, color: { opacity: OP_HIGH } },

  { from: 2, to: 6, color: { opacity: OP_HIGH } },
  { from: 5, to: 6, color: { opacity: OP_HIGH } },

  { from: 1, to: 8, color: { opacity: OP_MID } },

  { from: 3, to: 9, color: { opacity: OP_MID } },
  { from: 4, to: 9, color: { opacity: OP_MID } },
  { from: 5, to: 9, color: { opacity: OP_MID } },
  { from: 6, to: 9, color: { opacity: OP_MID } },

  { from: 8, to: 10, color: { opacity: OP_HIGH } },
  { from: 11, to: 10, color: { opacity: OP_HIGH } },

  { from: 10, to: 11, color: { opacity: OP_HIGH } },
  { from: 8, to: 11, color: { opacity: OP_HIGH } },
  { from: 4, to: 11, color: { opacity: OP_HIGH } },

  { from: 8, to: 12, color: { opacity: OP_HIGH } },
  { from: 9, to: 12, color: { opacity: OP_HIGH } },

  { from: 10, to: 13, color: { opacity: OP_MID } },
  { from: 8, to: 13, color: { opacity: OP_MID } },
  { from: 11, to: 13, color: { opacity: OP_HIGH } },
  { from: 4, to: 13, color: { opacity: OP_HIGH } },

  { from: 11, to: 14, color: { opacity: OP_MID } },
  { from: 8, to: 14, color: { opacity: OP_MID } },
  { from: 12, to: 14, color: { opacity: OP_MID } },

  { from: 8, to: 15, color: { opacity: OP_HIGH } },

  { from: 15, to: 16, color: { opacity: OP_HIGH } },
  { from: 10, to: 16, color: { opacity: OP_HIGH } },
  { from: 8, to: 16, color: { opacity: OP_HIGH } },
  { from: 11, to: 16, color: { opacity: OP_HIGH } },
  { from: 9, to: 16, color: { opacity: OP_HIGH } },

  { from: 13, to: 17, color: { opacity: OP_MID } },
  { from: 11, to: 17, color: { opacity: OP_MID } },
  { from: 14, to: 17, color: { opacity: OP_MID } },

  { from: 8, to: 18, color: { opacity: OP_HIGH } },
  { from: 15, to: 18, color: { opacity: OP_HIGH } },
  { from: 16, to: 18, color: { opacity: OP_MID } },
  { from: 19, to: 18, color: { opacity: OP_HIGH } },
  { from: 21, to: 18, color: { opacity: OP_MID } },

  { from: 16, to: 19, color: { opacity: OP_HIGH } },
  { from: 10, to: 19, color: { opacity: OP_HIGH } },
  { from: 13, to: 19, color: { opacity: OP_HIGH } },
  { from: 8, to: 19, color: { opacity: OP_HIGH } },
  { from: 9, to: 19, color: { opacity: OP_HIGH } },
  { from: 12, to: 19, color: { opacity: OP_HIGH } },

  { from: 18, to: 20, color: { opacity: OP_HIGH } },
  { from: 16, to: 20, color: { opacity: OP_HIGH } },

  { from: 19, to: 21, color: { opacity: OP_MID } },

  { from: 20, to: 22, color: { opacity: OP_HIGH } },
  { from: 19, to: 22, color: { opacity: OP_HIGH } },
  { from: 21, to: 22, color: { opacity: OP_HIGH } },

  { from: 21, to: 23, color: { opacity: OP_MID } },

  { from: 15, to: 24, color: { opacity: OP_HIGH } },
  { from: 21, to: 24, color: { opacity: OP_MID } },
  { from: 19, to: 24, color: { opacity: OP_MID } },

  { from: 20, to: 25, color: { opacity: OP_HIGH } },
  { from: 18, to: 25, color: { opacity: OP_MID } },
  { from: 16, to: 25, color: { opacity: OP_MID } },
  { from: 19, to: 25, color: { opacity: OP_MID } },

  { from: 16, to: 26, color: { opacity: OP_MID } },

  { from: 18, to: 28, color: { opacity: OP_MID } },
  { from: 16, to: 28, color: { opacity: OP_HIGH } },
  { from: 23, to: 28, color: { opacity: OP_MID } },
  { from: 19, to: 28, color: { opacity: OP_MID } },

  { from: 21, to: 29, color: { opacity: OP_MID } },
  { from: 4, to: 29, color: { opacity: OP_MID } },

  { from: 26, to: 30, color: { opacity: OP_HIGH } },
  { from: 19, to: 30, color: { opacity: OP_MID } },
  { from: 27, to: 30, color: { opacity: OP_HIGH } },

  { from: 8, to: 31, color: { opacity: OP_MID } },
  { from: 27, to: 31, color: { opacity: OP_MID } },
  { from: 9, to: 31, color: { opacity: OP_HIGH } },

  { from: 31, to: 32, color: { opacity: OP_MID } },
  { from: 27, to: 32, color: { opacity: OP_MID } },
  { from: 16, to: 32, color: { opacity: OP_MID } },
  { from: 23, to: 32, color: { opacity: OP_MID } },

  { from: 29, to: 33, color: { opacity: OP_MID } },
];