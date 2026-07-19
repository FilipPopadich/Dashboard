import germanyFlag from '../pictures/germany.webp'
import italyFlag from '../pictures/italy.webp'
import serbiaFlag from '../pictures/sebia.webp'
import spainFlag from '../pictures/spain.webp'

export const players = [
  {
    id: 'sinner',
    name: 'Jannik Sinner',
    country: 'ITA',
    flag: '🇮🇹',
    flagImg: italyFlag,
    color: 'var(--chart-2)',
    ranking: 1,
    slams: 4,
    titles: 30,
    turnedPro: 2018,
    birthDate: '2001-08-16',
    age: 24,
    height: "6'3\" (191cm)",
    weight: '170lbs (77kg)',
    plays: 'Right-Handed',
    backhand: 'Two-Handed',
    prizeMoney: '$64,837,801',
    ytdWins: 44,
    ytdLosses: 3,
    ytdTitles: 5,
  },
  {
    id: 'alcaraz',
    name: 'Carlos Alcaraz',
    country: 'ESP',
    flag: '🇪🇸',
    flagImg: spainFlag,
    color: 'var(--chart-1)',
    ranking: 2,
    slams: 7,
    titles: 26,
    turnedPro: 2018,
    birthDate: '2003-05-05',
    age: 23,
    height: "6'0\" (183cm)",
    weight: '163lbs (74kg)',
    plays: 'Right-Handed',
    backhand: 'Two-Handed',
    prizeMoney: '$64,997,598',
    ytdWins: 22,
    ytdLosses: 3,
    ytdTitles: 2,
  },
  {
    id: 'zverev',
    name: 'Alexander Zverev',
    country: 'GER',
    flag: '🇩🇪',
    flagImg: germanyFlag,
    color: 'var(--chart-3)',
    ranking: 3,
    slams: 0,
    titles: 25,
    turnedPro: 2013,
    birthDate: '1997-04-20',
    age: 29,
    height: "6'6\" (198cm)",
    weight: '198lbs (90kg)',
    plays: 'Right-Handed',
    backhand: 'Two-Handed',
    prizeMoney: '$66,017,932',
    ytdWins: 38,
    ytdLosses: 10,
    ytdTitles: 1,
  },
  {
    id: 'djokovic',
    name: 'Novak Djokovic',
    country: 'SRB',
    flag: '🇷🇸',
    flagImg: serbiaFlag,
    color: 'var(--chart-4)',
    ranking: 7,
    slams: 24,
    titles: 99,
    turnedPro: 2003,
    birthDate: '1987-05-22',
    age: 39,
    height: "6'2\" (188cm)",
    weight: '181lbs (82kg)',
    plays: 'Right-Handed',
    backhand: 'Two-Handed',
    prizeMoney: '$193,469,626',
    ytdWins: 9,
    ytdLosses: 4,
    ytdTitles: 0,
  },
]

export const getPlayer = (id) => players.find((p) => p.id === id)

export const careerStats = {
  sinner: {
    matches: 582,
    aces: 2514,
    doubleFaults: 675,
    firstServePct: 64.0,
    firstServePointsWonPct: 75.1,
    secondServePointsWonPct: 54.8,
    totalServicePointsWonPct: 59.8,
    breakPointsFaced: 2619,
    breakPointsSavedPct: 65.6,
    serviceGamesPlayed: 5238,
    serviceGamesWonPct: 85.4,
    firstServeReturnPointsWonPct: 34.0,
    secondServeReturnPointsWonPct: 54.0,
    breakPointsOpportunities: 3405,
    breakPointsConvertedPct: 42.9,
    returnGamesPlayed: 5238,
    returnGamesWonPct: 28.3,
    returnPointsWonPct: 41.0,
    totalPointsWonPct: 50.4,
  },
  alcaraz: {
    matches: 470,
    aces: 1311,
    doubleFaults: 1072,
    firstServePct: 69.2,
    firstServePointsWonPct: 70.7,
    secondServePointsWonPct: 55.7,
    totalServicePointsWonPct: 65.5,
    breakPointsFaced: 2115,
    breakPointsSavedPct: 63.5,
    serviceGamesPlayed: 4230,
    serviceGamesWonPct: 83.4,
    firstServeReturnPointsWonPct: 34.5,
    secondServeReturnPointsWonPct: 54.0,
    breakPointsOpportunities: 2750,
    breakPointsConvertedPct: 42.7,
    returnGamesPlayed: 4230,
    returnGamesWonPct: 31.4,
    returnPointsWonPct: 42.1,
    totalPointsWonPct: 53.8,
  },
  zverev: {
    matches: 797,
    aces: 4447,
    doubleFaults: 1235,
    firstServePct: 71.1,
    firstServePointsWonPct: 74.3,
    secondServePointsWonPct: 51.0,
    totalServicePointsWonPct: 66.5,
    breakPointsFaced: 3587,
    breakPointsSavedPct: 61.5,
    serviceGamesPlayed: 7173,
    serviceGamesWonPct: 84.0,
    firstServeReturnPointsWonPct: 31.0,
    secondServeReturnPointsWonPct: 50.0,
    breakPointsOpportunities: 4662,
    breakPointsConvertedPct: 40.8,
    returnGamesPlayed: 7173,
    returnGamesWonPct: 24.2,
    returnPointsWonPct: 38.4,
    totalPointsWonPct: 52.5,
  },
  djokovic: {
    matches: 1541,
    aces: 6241,
    doubleFaults: 2775,
    firstServePct: 64.8,
    firstServePointsWonPct: 74.4,
    secondServePointsWonPct: 55.6,
    totalServicePointsWonPct: 65.0,
    breakPointsFaced: 6935,
    breakPointsSavedPct: 65.8,
    serviceGamesPlayed: 13869,
    serviceGamesWonPct: 86.5,
    firstServeReturnPointsWonPct: 34.5,
    secondServeReturnPointsWonPct: 53.0,
    breakPointsOpportunities: 9015,
    breakPointsConvertedPct: 44.1,
    returnGamesPlayed: 13869,
    returnGamesWonPct: 30.5,
    returnPointsWonPct: 41.9,
    totalPointsWonPct: 53.5,
  },
}

export const statFields = {
  serve: [
    { key: 'serviceGamesWonPct', pct: true },
    { key: 'serviceGamesPlayed', pct: false },
    { key: 'totalServicePointsWonPct', pct: true },
    { key: 'aces', pct: false },
    { key: 'doubleFaults', pct: false },
    { key: 'firstServePct', pct: true },
    { key: 'firstServePointsWonPct', pct: true },
    { key: 'secondServePointsWonPct', pct: true },
    { key: 'breakPointsSavedPct', pct: true },
    { key: 'breakPointsFaced', pct: false },
  ],
  return: [
    { key: 'returnGamesWonPct', pct: true },
    { key: 'returnGamesPlayed', pct: false },
    { key: 'returnPointsWonPct', pct: true },
    { key: 'totalPointsWonPct', pct: true },
    { key: 'firstServeReturnPointsWonPct', pct: true },
    { key: 'secondServeReturnPointsWonPct', pct: true },
    { key: 'breakPointsConvertedPct', pct: true },
    { key: 'breakPointsOpportunities', pct: false },
  ],
}

export const trendableStats = [
  'winRate',
  'firstServePct',
  'firstServePointsWonPct',
  'secondServePointsWonPct',
  'totalServicePointsWonPct',
  'serviceGamesWonPct',
  'breakPointsSavedPct',
  'returnPointsWonPct',
  'totalPointsWonPct',
]

export const seasons = ['2022', '2023', '2024', '2025', '2026*']

const winRateBySeason = {
  sinner: [73.4, 78.6, 91.4, 90.6, 92.5],
  alcaraz: [81.4, 84.4, 80.6, 88.8, 88.0],
  zverev: [70.5, 69.0, 76.7, 72.4, 81.1],
  djokovic: [89.3, 92.6, 77.4, 70.2, 68.4],
}

const offsetPattern = {
  sinner: [-1.4, -0.5, 0.6, 1.1, 0.4],
  alcaraz: [-1.8, -0.7, 0.3, 1.4, 1.0],
  zverev: [-1.0, -1.5, 0.8, 0.4, 1.6],
  djokovic: [0.9, 1.6, 0.2, -1.2, -1.9],
}

const round1 = (n) => Math.round(n * 10) / 10

export const seasonTrend = players.reduce((acc, { id }) => {
  const career = careerStats[id]
  const offsets = offsetPattern[id]
  acc[id] = seasons.map((season, i) => {
    const row = { season, winRate: winRateBySeason[id][i] }
    trendableStats.forEach((stat) => {
      if (stat === 'winRate') return
      row[stat] = round1(career[stat] + offsets[i])
    })
    return row
  })
  return acc
}, {})