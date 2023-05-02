let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let status = user.premiumTime > 0 ? 'Premium' : 'Free'
  let atmStatus = user.atm > 0 ? 'Level ' + user.atm : 'Tidak Aktif'
  let roboStatus = user.robo > 0 ? 'Level ' + user.robo : 'Tidak Aktif'
  let isRegistered = user.registered ? 'Ya' : 'Tidak'
  let caption = `
🏦 *BANK ${user.registered ? user.name : conn.getName(m.sender)}*
🏛️ Bank: *${user.bank}/${user.fullatm}*
💰 Uang: *Rp ${user.money}*
💳 ATM: *${atmStatus}*
🤖 Robo: *${roboStatus}*
🌟 Status: *${status}*
📑 Terdaftar: *${isRegistered}*
`.trim()
  conn.reply(m.chat, caption, m)
}

handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i
handler.limit = 1
export default handler
