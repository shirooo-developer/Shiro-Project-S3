let handler = async (m, { conn, args, text}) => {
  let who = m.mentionedJid[0] || text.replace(/[@+.-]/g, '').replace(' ', '') + '@s.whatsapp.net' || ''
  if (!who) throw '*Tag User!*'
  if (!(who in global.db.data.users)) throw '*User tidak terdaftar dalam Database!*'
  if (!global.db.data.users[m.sender].title) throw '*Anda Tidak Memiliki Title!*'
  if (who === m.sender) throw '*Tidak Bisa Menghapus Title Anda Sendiri!*'
  global.db.data.users[who].title = ''
  m.reply(`Title ${conn.getName(who)} berhasil dihapus`)
  let pesan = `Maaf, title Anda telah dihapus oleh ${conn.getName(m.sender)}`
  conn.reply(who, pesan, m)
}
handler.help = ['titleout @tag']
handler.tags = ['owner']
handler.command = /^titleout$/i
handler.private = true

export default handler