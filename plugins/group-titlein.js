let handler = async (m, { conn, args, text}) => {
  let who = args[0] + '@s.whatsapp.net'
  let title = args.slice(1).join(' ')
  
  if (!who) throw 'Masukkan Nomor Pengguna\n\n*Contoh: .titlein 628xxxxx*'
  if (!title) throw 'Masukkan Nama Titlenya\n\n*Contoh: .titlein 628xxxxx Nama Title*'
  
  if (!(who in global.db.data.users)) {
    throw 'Pengguna Tidak Terdaftar Dalam Database'
  }
  
  let user = global.db.data.users[who]
  user.title = title
  
  let sender = m.sender
  let senderName = conn.getName(sender)
  
  // Mengirim pesan pribadi ke pengguna yang mendapatkan title
  conn.reply(who, `Hai ${conn.getName(who)},\n\nKamu mendapatkan title baru dari ${senderName}: ${title}\n`)
  
  m.reply(`
${conn.getName(who)} Sekarang Mendapatkan Title:\n\n*${title}*
`)
}

handler.help = ['titlein [nomor pengguna] [nama title]']
handler.tags = ['owner']
handler.mods = false
handler.command = /^titlein$/i
handler.register = false

export default handler