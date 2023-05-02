let handler = async (m, { conn, args }) => {
  let user = db.data.users[m.sender]
  let target = args[0]
  let targetUser = db.data.users[target]
  
  if (!targetUser) return conn.reply(m.chat, `Pengguna ${target} tidak ditemukan!`, m)

  if (user.partner === target) {
    return conn.reply(m.chat, `Kamu sudah melamar ${targetUser.name} sebelumnya!`, m)
  }
  
  if (user.partner) {
    return conn.reply(m.chat, `Kamu sudah memiliki pasangan!`, m)
  }
  
  conn.reply(m.chat, `Kamu berhasil melamar ${targetUser.name}!`, m)
  conn.reply(target, `${user.name} telah melamar kamu! Apakah kamu mau menerima lamaran ini?`, null, { contextInfo: { mentionedJid: [m.sender] }, quoted: m })
  targetUser.propose = { sender: m.sender, name: user.name }
}
handler.help = ['melamar <@tag>']
handler.tags = ['fun']
handler.command = /^melamar$/i

handler.fail = null

handler.all = async (m, { conn, usedPrefix }) => {
  let user = db.data.users[m.sender]
  let targetUser = db.data.users[m.quoted.sender || m.mentionedJid[0]]
  
  if (targetUser && targetUser.propose) {
    if (targetUser.propose.sender === m.sender) {
      if (/^terima$/i.test(m.text)) {
        user.partner = targetUser.propose.sender
        targetUser.partner = m.sender
        delete targetUser.propose
        return conn.reply(m.chat, `Selamat! Kamu dan ${targetUser.name} sekarang resmi menjadi pasangan!`, m)
      } else if (/^tolak$/i.test(m.text)) {
        delete targetUser.propose
        return conn.reply(m.chat, `Sayang sekali, ${user.name} telah menolak lamaranmu. Silakan mencoba lagi nanti!`, m)
      }
    }
  }
}
