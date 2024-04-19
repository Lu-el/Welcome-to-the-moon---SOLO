export const deck = "р15 е13 з2 р5 в7 з8 в13 к8 р8 э1 р2 в8 в10 в6 в9 в3 к4 к10 к13 э10 э7 э11 э5 э5 к12 э9 з12 э6 э15 е4 е6 е10 е8 е3 р7 р6 р11 р5 р9 р8 р10 з8 з11 з10 з4 з9 з14 з6 р1 р14 к3 э9 э4 р11 з7 э12 е12 к6 э7 з7 э11 з9 з5";

export const signs = {
  "к": "космонавт",
  "в": "вода",
  "е": "ежедневник",
  "р": "робот",
  "з": "зелень",
  "э": "энергия",
  "вода": "./img/water.jpg",
  "Astra": "./img/astra.jpg",
  "космонавт": "./img/spaceman.jpg",
  "ежедневник": "./img/dailynote.jpg",
  "робот": "./img/robot.jpg",
  "зелень": "./img/plant.jpg",
  "энергия": "./img/energy.jpg",
}

export const signColor = {
  "робот": "grey",
  "энергия": "#682568",
  "зелень": "green",
  "вода": "#3b3baf",
  "космонавт": "#b68835",
  "ежедневник": "#a75b83",
}

export const bot = [
  {
    level: 1,
    name: "КЭТРИН",
    url: './img/bots/bot1.jpg',
    cards: {
      "робот": 2,
      "энергия": 3,
      "зелень": 2,
      "вода": 3,
      "космонавт": 1,
      "ежедневник": 4,
    }
  },

  {
    level: 2,
    name: "АЛЕКСЕЙ",
    url: './img/bots/bot2.jpg',
    cards: {
      "робот": 2,
      "энергия": 3,
      "зелень": 3,
      "вода": 2,
      "космонавт": 4,
      "ежедневник": 3,
    }
  },

  {
    level: 3,
    name: "МАРГАРЕТ",
    url: './img/bots/bot3.jpg',
    cards: {
      "робот": 5,
      "энергия": 4,
      "зелень": 2,
      "вода": 2,
      "космонавт": 2,
      "ежедневник": 3,
    }
  },

  {
    level: 4,
    name: "ФРАНКЛИН",
    url: './img/bots/bot4.jpg',
    cards: {
      "робот": 2,
      "энергия": 6,
      "зелень": 4,
      "вода": 3,
      "космонавт": 3,
      "ежедневник": 2,
    }
  },

  {
    level: 5,
    name: "СЕРГЕЙ",
    url: './img/bots/bot5.jpg',
    cards: {
      "робот": 4,
      "энергия": 4,
      "зелень": 4,
      "вода": 4,
      "космонавт": 4,
      "ежедневник": 3,
    }
  },

  {
    level: 6,
    name: "СТЭФАНИ",
    url: './img/bots/bot6.jpg',
    cards: {
      "робот": 6,
      "энергия": 2,
      "зелень": 4,
      "вода": 5,
      "космонавт": 4,
      "ежедневник": 4,
    }
  },

  {
    level: 7,
    name: "ТОМАС",
    url: './img/bots/bot7.jpg',
    cards: {
      "робот": 5,
      "энергия": 4,
      "зелень": 3,
      "вода": 6,
      "космонавт": 5,
      "ежедневник": 4,
    }
  },

  {
    level: 8,
    name: "ПЭГГИ",
    url: './img/bots/bot8.jpg',
    cards: {
      "робот": 5,
      "энергия": 3,
      "зелень": 6,
      "вода": 3,
      "космонавт": 6,
      "ежедневник": 6,
    }
  },
]

export const scenarios = [
  {
    level: 1,
    urlBot: "./img/scenarios/scenario1.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario1/missionA1.jpg',
          description: 'Полностью пронумеруйте указанные 3 уровня',
          points: [3, 2]
        },
        {
          url: './img/scenarios/scenario1/missionA2.jpg',
          description: 'Полностью пронумеруйте указанные 3 уровня',
          points: [4, 2]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario1/missionB1.jpg',
          description: 'Полностью пронумеруйте указанный уровень',
          points: [3, 2]
        },
        {
          url: './img/scenarios/scenario1/missionB2.jpg',
          description: 'Полностью пронумеруйте указанные уровени',
          points: [3, 2]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario1/missionC1.jpg',
          description: 'Впишите 10 X бонусом "Автопогрузка"',
          points: [2, 1]
        },
        {
          url: './img/scenarios/scenario1/missionC2.jpg',
          description: 'Обведите 5 ячеек системных ошибок',
          points: [3, 2]
        }
      ]
    }
    ]
  },

  {
    level: 2,
    urlBot: "./img/scenarios/scenario2.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario2/missionA1.jpg',
          description: 'Обведите 3 множителя, все роботы должны быть обведены(соединены)',
          points: [9, 5]
        },
        {
          url: './img/scenarios/scenario2/missionA2.jpg',
          description: 'Обведите все растения на 2х станциях, роботы не обязательно обведены',
          points: [10, 5]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario1/missionB1.jpg',
          description: 'Полностью заполните 2 отрезка по 6 ячеек',
          points: [11, 6]
        },
        {
          url: './img/scenarios/scenario1/missionB2.jpg',
          description: 'Создайте 3 заполненных отрезка',
          points: [12, 6]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario1/missionC1.jpg',
          description: 'Обведите 6 резервуаров',
          points: [9, 5]
        },
        {
          url: './img/scenarios/scenario1/missionC2.jpg',
          description: 'Обведите 4 резервуара, расположенных подряд',
          points: [11, 6]
        }
      ]
    }
    ]
  },

  {
    level: 3,
    urlBot: "./img/scenarios/scenario3.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario3/missionA1.jpg',
          description: 'Пронумеруйте 3 любых вертикальных ряда',
          points: [12, 6]
        },
        {
          url: './img/scenarios/scenario3/missionA2.jpg',
          description: 'Пронумеруйте 3 любых горизонтальных ряда',
          points: [12, 5]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario3/missionB1.jpg',
          description: 'Соедините обсерваторию со звездолетом тоннелями',
          points: [9, 4]
        },
        {
          url: './img/scenarios/scenario3/missionB2.jpg',
          description: 'Обведите все радиотелескопы в 2х любых кварталов',
          points: [9, 4]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario3/missionC1.jpg',
          description: 'Обведите 10 растений',
          points: [8, 4]
        },
        {
          url: './img/scenarios/scenario3/missionC2.jpg',
          description: 'Обведите все резервуары с водой в 2 любых кварталах',
          points: [9, 5]
        }
      ]
    }
    ]
  },

  {
    level: 4,
    urlBot: "./img/scenarios/scenario4.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario4/missionA1.jpg',
          description: 'Извлеките ресурсы из 5 шахт',
          points: [8, 4]
        },
        {
          url: './img/scenarios/scenario4/missionA2.jpg',
          description: 'Извлеките ресурсы из 4 соседних шахт',
          points: [9, 4]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario4/missionB1.jpg',
          description: 'Активизируйте 5 центров оптимизации',
          points: [11, 6]
        },
        {
          url: './img/scenarios/scenario4/missionB2.jpg',
          description: 'Активизируйте или модернизируйте суммарно 6 любых производств',
          points: [10, 4]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario4/missionC1.jpg',
          description: 'Обведите 8 растений(не обязательно извлекать)',
          points: [8, 3]
        },
        {
          url: './img/scenarios/scenario4/missionC2.jpg',
          description: 'Обведите 5 ячеек с водой(не обязательно извлекать)',
          points: [10, 4]
        }
      ]
    }
    ]
  },

  {
    level: 5,
    urlBot: "./img/scenarios/scenario5.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario5/missionA1.jpg',
          description: 'Заполните все ячейки в одном небоскребе',
          points: ['&#9733;', '&#10040;']
        },
        {
          url: './img/scenarios/scenario5/missionA2.jpg',
          description: 'Заполните верхний уровень двух небоскребов',
          points: ['&#9733;', '&#10040;']
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario5/missionB1.jpg',
          description: 'Обведите минимум 2 значка(любое сочетание) на любых 3х зданиях',
          points: ['&#9733;', '&#10040;']
        },
        {
          url: './img/scenarios/scenario5/missionB2.jpg',
          description: 'Обведите все 3 значка на любых двух уровнях башни',
          points: ['&#9733;', '&#10040;']
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario5/missionC1.jpg',
          description: 'Постройте все секции купола',
          points: ['&#9733;', '&#10040;']
        },
        {
          url: './img/scenarios/scenario5/missionC2.jpg',
          description: 'Впишите 4 Х',
          points: ['&#9733;', '&#10040;']
        }
      ]
    }
    ]
  },

  {
    level: 6,
    urlBot: "./img/scenarios/scenario6.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario6/missionA1.jpg',
          description: 'Эвакуируйте 2 жилых блока. Они могут быть частично или полностью заражены',
          points: [8, 3]
        },
        {
          url: './img/scenarios/scenario6/missionA2.jpg',
          description: 'Эвакуируйте все жилые блоки на одном уровне. Они могут быть частично или полностью заражены',
          points: [8, 3]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario6/missionB1.jpg',
          description: 'Перекройте все проходы 3 жылых блока',
          points: [11, 4]
        },
        {
          url: './img/scenarios/scenario6/missionB2.jpg',
          description: 'Перекройте все проходы с зеленым и синим вирусом',
          points: [12, 5]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario6/missionC1.jpg',
          description: 'Обведите все энергоблоки на2 любых уровнях',
          points: [10, 4]
        },
        {
          url: './img/scenarios/scenario6/missionC2.jpg',
          description: 'Обведите все теплица и резервуары на2 любых уровнях',
          points: [10, 4]
        }
      ]
    }
    ]
  },

  {
    level: 7,
    urlBot: "./img/scenarios/scenario7.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario7/missionA1.jpg',
          description: 'Пронумеруйте 3 любые теплицы и обведите в каждой по 3 растения',
          points: [10, 5]
        },
        {
          url: './img/scenarios/scenario7/missionA2.jpg',
          description: 'Пронумеруйте теплицу на самом высоком уровне и обведите в ней 3 растения',
          points: [7, 3]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario7/missionB1.jpg',
          description: 'Целиком заполните суммарно 7 модулей звездолетов',
          points: [9, 4]
        },
        {
          url: './img/scenarios/scenario7/missionB2.jpg',
          description: 'Целиком заполните 3 звездолета',
          points: [10, 5]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario7/missionC1.jpg',
          description: 'Обведите все энергоблоки у 3 любых звездолетов',
          points: [10, 5]
        },
        {
          url: './img/scenarios/scenario7/missionC2.jpg',
          description: 'Обведите все резервуары у 3 любых звездолетов',
          points: [10, 5]
        }
      ]
    }
    ]
  },

  {
    level: 8,
    urlBot: "./img/scenarios/scenario8.jpg",
    missions: [{
      type: "A",
      mission: [
        {
          url: './img/scenarios/scenario8/missionA1.jpg',
          description: 'Захватите 4 планеты на одном поле',
          points: [12, 5]
        },
        {
          url: './img/scenarios/scenario8/missionA2.jpg',
          description: 'Захватите по 1 планете каждого типа на одном поле',
          points: [9, 4]
        }
      ],
    },
    {
      type: "Б",
      mission: [
        {
          url: './img/scenarios/scenario8/missionB1.jpg',
          description: 'С помощью "Инженерный отдел" впишите свой символ в 7 астероидов на одном поле',
          points: [9, 5]
        },
        {
          url: './img/scenarios/scenario8/missionB2.jpg',
          description: 'УвУвеличьте ценность каждого типа планет дважды на одном поле',
          points: [11, 6]
        }
      ],
    }, {
      type: "В",
      mission: [
        {
          url: './img/scenarios/scenario8/missionC1.jpg',
          description: 'Зачеркните 6 растения и 4 воды в зоне подсчёта очков на одном поле',
          points: [10, 4]
        },
        {
          url: './img/scenarios/scenario8/missionC2.jpg',
          description: 'С помощью "Центр управления" впишите свой символ в 4 разных спутника на одном поле',
          points: [10, 6]
        }
      ]
    }
    ]
  },
]


// р15 е13 з2 р5 в7 з8 в13 к8 р8 э1 р2 в8
// в10 в6 в9 в3 к4 к10 к13 э10 э7 э11 э5 э5 к12 э9 з12 э6 э15 е4 е6 е10 е8 е3 р7 р6 р11 р5 р9 р8 р10 з8 з11 з10 з4 з9 з14 з6 р1 р14 к3 э9 э4 р11 з7 э12 е12 к6 э7 з7 э11 з9 з5