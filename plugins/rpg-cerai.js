let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  if (!user.partner) return conn.reply(m.chat, 'Kamu belum menikah', m)
  let partner = global.db.data.users[user.partner]
  if (!partner) return conn.reply(m.chat, 'Kamu belum menikah', m)
  if (!partner.partner) {
    delete user.partner
    conn.reply(m.chat, `Kamu sudah bercerai dengan ${partner.name}`, m, {contextInfo: { mentionedJid: [partner.jid] }})
  } else conn.reply(m.chat, 'Pihak lawan belum menyetujui', m, {contextInfo: { mentionedJid: [partner.jid] }})
}
handler.help = ['bercerai']
handler.tags = ['rpg']
handler.command = /^bercerai$/i

module.exports = handler
