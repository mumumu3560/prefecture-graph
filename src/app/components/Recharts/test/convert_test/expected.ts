export const expected1 = {
    総人口: [
      { year: 1960, '千葉県': 2306010, '東京都': 2306010 },
    ],
    年少人口: [
      { year: 1960, '千葉県': 700195, '東京都': 700195 },
    ],
    生産年齢人口: [
      { year: 1960, '千葉県': 1458717, '東京都': 1458717 },
    ],
    老年人口: [
      { year: 1960, '千葉県': 147098, '東京都': 147098 },
    ],
}

export const expected2 = {
    総人口: [
      { year: 1960, '香川県': 1, '東京都': 9 },
      { year: 1965, '香川県': 2, '東京都': 10 },
    ],
    年少人口: [
      { year: 1960, '香川県': 3, '東京都': 11 },
      { year: 1965, '香川県': 4, '東京都': 12 },
    ],
    生産年齢人口: [
      { year: 1960, '香川県': 5, '東京都': 13 },
      { year: 1965, '香川県': 6, '東京都': 14 },
    ],
    老年人口: [
      { year: 1960, '香川県': 7, '東京都': 15 },
      { year: 1965, '香川県': 8, '東京都': 16 },
    ],
}
  

export const expected3 = {
    総人口: [
        //ここだけ変えた。東京との値が違う
      { year: 1960, '香川県': 1, '東京都': 11 },
      { year: 1965, '香川県': 2, '東京都': 10 },
    ],
    年少人口: [
      { year: 1960, '香川県': 3, '東京都': 11 },
      { year: 1965, '香川県': 4, '東京都': 12 },
    ],
    生産年齢人口: [
      { year: 1960, '香川県': 5, '東京都': 13 },
      { year: 1965, '香川県': 6, '東京都': 14 },
    ],
    老年人口: [
      { year: 1960, '香川県': 7, '東京都': 15 },
      { year: 1965, '香川県': 8, '東京都': 16 },
    ],
}









export const expected4 = {
  総人口: [
    {year: 1980, "青森": 12817}, 
    { year: 1985, "青森": 12707 },
    { year: 1990, "青森": 12571 },
    { year: 1995, "青森": 12602 },
    { year: 2000, "青森": 12199 }, 
    { year: 2005, "青森": 11518 }, 
    { year: 2010, "青森": 10888 },
    { year: 2015, "青森": 10133 },
    { year: 2020, "青森": 9302 },
    { year: 2025, "青森": 8431 },
    {year: 2030, "青森": 7610 }, 
    {year: 2035,"青森": 6816}, 
    {year: 2040,"青森": 6048}, 
    {year: 2045,"青森": 5324}
  ],
  年少人口: [
    {year: 1980, "青森": 2906,},
    {year: 1985,"青森": 2769,},
    {year: 1990, "青森": 2346,},
    {year: 1995, "青森": 2019, }, 
    {year: 2000, "青森": 1728,}, 
    {year: 2005, "青森": 1442,},
    {year: 2010, "青森": 1321,},
    {year: 2015, "青森": 1144,},
    {year: 2020, "青森": 936,},
    {year: 2025, "青森": 822,},
    {year: 2030, "青森": 705,},
    {year: 2035, "青森": 593,},
    {year: 2040, "青森": 513,},
    {year: 2045, "青森": 443,}
  ],
  生産年齢人口: [
    //このデータを
    {year: 1980, "青森": 8360,},
    {year: 1985, "青森": 8236,},
    {year: 1990, "青森": 8144,},
    {year: 1995, "青森": 8048,},
    {year: 2000, "青森": 7595,},
    {year: 2005, "青森": 7032,},
    {year: 2010, "青森": 6387,},
    {year: 2015, "青森": 5538,},
    {year: 2020, "青森": 4756,},
    {year: 2025, "青森": 4187,},
    {year: 2030, "青森": 3693,},
    {year: 2035, "青森": 3251,},
    {year: 2040, "青森": 2681,},
    {year: 2045, "青森": 2261,}

  ],
  老年人口: [

    //以下のデータの変換
    {year: 1980, "青森": 1550,},
    {year: 1985, "青森": 1702,},
    {year: 1990, "青森": 2081,},
    {year: 1995, "青森": 2535,},
    {year: 2000, "青森": 2876,},
    {year: 2005, "青森": 3044,},
    {year: 2010, "青森": 3179,},
    {year: 2015, "青森": 3442,},
    {year: 2020, "青森": 3578,},
    {year: 2025, "青森": 3422,},
    {year: 2030, "青森": 3212,},
    {year: 2035, "青森": 2972,},
    {year: 2040, "青森": 2854,},
    {year: 2045, "青森": 2620,}
  ],
}