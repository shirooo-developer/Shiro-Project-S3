const ranks = {
  /*
  'Rank Name': [<Minimal levelhunter To Obtain this Rank>, <Hadiah untuk Rank ini>]
  */
  'Hunter-in-Training': [0, 0],
  'Apprentice Hunter': [20, 10000],
  'Novice Hunter': [50, 20000],
  'Journeyman Hunter': [80, 30000],
  'Adept Hunter': [120, 40000],
  'Expert Hunter': [160, 50000],
  'Master Hunter': [200, 60000],
  'Grandmaster Hunter': [240, 70000],
  'Elite Hunter': [280, 80000],
  'Legendary Hunter': [320, 90000],
  'Mythical Hunter': [360, 100000],
  'King of Hunters': [400, 110000],
  'Hunter of the North': [440, 120000],
  'Hunter of the West': [480, 130000],
  'Hunter of the South': [520, 140000],
  'Hunter of the East': [560, 150000],
  'Shadow Hunter': [600, 160000],
  'Demon Hunter': [640, 170000],
  'Dragon Hunter': [680, 180000],
  'Phoenix Hunter': [720, 190000],
  'Angel Hunter': [760, 200000],
  'God Hunter': [800, 210000],
  'Hunter of the First Rank': [840, 220000],
  'Hunter of the Second Rank': [880, 230000],
  'Hunter of the Third Rank': [920, 240000],
  'Hunter of the Fourth Rank': [960, 250000],
  'Hunter of the Fifth Rank': [1000, 260000],
  'Hunter of the Sixth Rank': [1040, 270000],
  'Hunter of the Seventh Rank': [1080, 280000],
  'Hunter of the Eighth Rank': [1120, 290000],
  'Hunter of the Ninth Rank': [1160, 300000],
  'Hunter of the Tenth Rank': [1200, 310000],
  'Legendary Hunter of the First Rank': [1240, 320000],
  'Legendary Hunter of the Second Rank': [1280, 330000],
  'Legendary Hunter of the Third Rank': [1320, 340000],
  'Legendary Hunter of the Fourth Rank': [1360, 350000],
  'Legendary Hunter of the Fifth Rank': [1400, 360000],
  'Legendary Hunter of the Sixth Rank': [1440, 370000],
  'Legendary Hunter of the Seventh Rank': [1480, 380000],
  'Legendary Hunter of the Eighth Rank': [1520, 390000],
  'Legendary Hunter of the Ninth Rank': [1560, 400000],
  'Legendary Hunter of the Tenth Rank': [1600, 410000],
  'Mythical Hunter of the First Rank': [1640, 420000],
  'Mythical Hunter of the Second Rank': [1680, 430000],
  'Mythical Hunter of the Third Rank': [1720, 440000],
  'Mythical Hunter of the Fourth Rank': [1760, 450000],
  'Mythical Hunter of the Fifth Rank': [1800, 460000]
}

export function before(m) {
  let user = db.data.users[m.sender]
  let levelhunter = user.levelhunter
  let rank = (Object.entries(ranks).sort((a, b) => b[1][0] - a[1][0]).find(([, [minlevelhunter]]) => levelhunter >= minlevelhunter) || Object.entries(ranks)[0])[0]
  user.rank = rank
  
  if (user.previousRank != rank) {
    let moneyReward = ranks[rank][1]
    user.money += moneyReward
    conn.reply(m.chat, `Selamat! Kamu telah naik rank menjadi ${rank}. Kamu mendapatkan bonus ${moneyReward} money!`, m)
    user.previousRank = rank
  }
  
  return !0
}