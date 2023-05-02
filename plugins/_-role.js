const roles = {
  /*
  'Role Name': <Minimal Level To Obtain this Role>
  */
  'Apprentice Mage': 0,
  'Novice Mage': 50,
  'Adept Mage': 100,
  'Wizard': 150,
  'Sorcerer': 200,
  'Master Sorcerer': 250,
  'Grandmaster Sorcerer': 300,
  'Apprentice Summoner': 350,
  'Novice Summoner': 400,
  'Adept Summoner': 450,
  'Summoner': 500,
  'Master Summoner': 550,
  'Grandmaster Summoner': 600,
  'Apprentice Alchemist': 650,
  'Novice Alchemist': 700,
  'Adept Alchemist': 750,
  'Alchemist': 800,
  'Master Alchemist': 850,
  'Grandmaster Alchemist': 900,
  'Knight': 950,
  'Master Knight': 1000,
  'Grandmaster Knight': 1050,
  'Paladin': 1100,
  'Master Paladin': 1150,
  'Grandmaster Paladin': 1200,
  'Apprentice Ninja': 1250,
  'Novice Ninja': 1300,
  'Adept Ninja': 1350,
  'Ninja': 1400,
  'Master Ninja': 1450,
  'Grandmaster Ninja': 1500,
  'Samurai': 1550,
  'Master Samurai': 1600,
  'Grandmaster Samurai': 1650,
  'Demon Hunter': 1700,
  'Master Demon Hunter': 1750,
  'Grandmaster Demon Hunter': 1800,
  'Apprentice Dragon Rider': 1850,
  'Novice Dragon Rider': 1900,
  'Adept Dragon Rider': 1950,
  'Dragon Rider': 2000,
  'Master Dragon Rider': 2050,
  'Grandmaster Dragon Rider': 2100,
  'Archmage': 2150,
  'Master Archmage': 2200,
  'Grandmaster Archmage': 2250,
  'Divine Healer': 2300,
  'Master Divine Healer': 2350,
  'Grandmaster Divine Healer': 2400,
  'Summoner of the Gods': 2450,
  'Master Summoner of the Gods': 2500,
  'Grandmaster Summoner of the Gods': 2550,
  'Chaos Bringer': 2600,
  'Master Chaos Bringer': 2650,
  'Grandmaster Chaos Bringer': 2700,
  'Ethereal Being': 2750,
  'Master Ethereal Being': 2800,
  'Grandmaster Ethereal Being': 2850,
  'Celestial Guardian': 2900,
  'Master Celestial Guardian': 2950,
  'Grandmaster Celestial Guardian': 3000,
}

export function before(m) {
  let user = db.data.users[m.sender]
  let level = user.level
  let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
  user.role = role
  return !0
}

}
