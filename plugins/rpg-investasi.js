let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `Contoh: ${usedPrefix}investasi 500000`
  let value = isNaN(text) ? parseInt(text.replace(/k|rb|juta/gi, match => {
    if (match == 'k') return '000'
    if (match == 'rb') return '00000'
    if (match == 'juta') return '000000'
    return ''
  })) : parseInt(text)
  if (value > global.db.data.users[m.sender].money) throw 'Uang kamu tidak cukup untuk melakukan investasi!'
  if (value < 1000) throw 'Minimal investasi adalah 1000!'
  let profit = value * 0.05
  let limit = 7 * 24 * 60 * 60 * 1000
  let expiration = new Date() * 1 + limit
  global.db.data.users[m.sender].money -= value
  global.db.data.users[m.sender].invest += value
  global.db.data.users[m.sender].investExpiration = expiration
  global.db.data.users[m.sender].investProfit = profit
  conn.reply(m.chat, `Berhasil melakukan investasi sebesar ${value}. Keuntungan investasi sebesar ${profit} akan diterima setelah ${clockString(limit)}.`, m)

  // Pengecekan setiap pengiriman pesan
  setInterval(() => {
    let user = global.db.data.users[m.sender]
    if (user.invest > 0 && new Date() * 1 >= user.investExpiration) {
      let profit = user.investProfit
      global.db.data.users[m.sender].money += profit
      global.db.data.users[m.sender].invest = 0
      global.db.data.users[m.sender].investExpiration = 0
      global.db.data.users[m.sender].investProfit = 0
      conn.reply(m.chat, `Investasi sebesar ${user.invest} telah berakhir. Kamu mendapatkan keuntungan sebesar ${profit}.`, m)
    }
  }, 1000)
}

handler.help = ['investasi <jumlah uang>']
handler.tags = ['economy']
handler.command = /^investasi$/i
handler.limit = 1
handler.group = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h} jam ${m} menit ${s} detik`
}
