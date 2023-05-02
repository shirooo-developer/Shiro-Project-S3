let handler = async (m, { conn, text }) => {
  let members = text.trim().split(/[@, ]+/)
  let amount = parseInt(members.pop())
  
  if (isNaN(amount)) {
    return conn.reply(m.chat, 'Silakan masukkan jumlah tagihan yang valid', m)
  }
  
  let numMembers = members.length
  if (numMembers < 2) {
    return conn.reply(m.chat, 'Tagihan harus dibagi dengan setidaknya 2 orang', m)
  }
  
  let share = amount / numMembers
  let message = `Setiap orang harus membayar *Rp ${share.toLocaleString()}*`
  
  members.forEach(member => {
    message += `\n@${member}`
  })
  
  conn.reply(m.chat, message, m)
}

handler.help = ['splitbill @<username> <jumlah>']
handler.tags = ['tools']
handler.command = /^splitbill$/i

export default handler
