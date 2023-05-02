let handler = async (m, { conn, text, usedPrefix, command }) => {
  let user = global.db.data.users[m.sender]
  if (user.lastperisai <= 0) throw 'Kamu tidak menggunakan perisai.'
  if (user.money < 5000) throw 'Uangmu tidak mencukupi untuk mematikan perisai.'
  let success = Math.random() < 0.5
  if (success) {
    user.lastperisai = 0
    user.money -= 5000
    return conn.reply(m.chat, 'Perisaimu berhasil dimatikan!', m)
  } else {
    let damage = Math.floor(Math.random() * 5000)
    user.money -= damage
    return conn.reply(m.chat, `Maaf, gagal mematikan perisai dan kamu mengalami kerugian sebesar ${damage}!`, m)
  }
}

handler.help = ['matikanperisai']
handler.tags = ['rpg']
handler.command = /^matikanperisai$/
handler.limit = true

export default handler