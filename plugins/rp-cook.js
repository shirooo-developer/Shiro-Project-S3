let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let buf = user.atm
  let buff = (buf == 0 ? '1' : '' || buf == 1 ? '1' : '' || buf == 2 ? '1' : '' || buf == 3 ? '1' : '' || buf == 4 ? '1' : '' || buf == 5 ? '1' : '' || buf == 6 ? '1' : '' || buf == 7 ? '1' : '' || buf == 8 ? '1' : '' || buf == 9 ? '1' : '' || buf == 10 ? '1' : '' || buf == 11 ? '1' : '') 
  let botol = global.botwm

let lgocook = `
*「 C O O K 」*
`

  let caption = `
*Ayam Bakar 🍗*
- 2 Ayam
- 4 Coal

*Ayam Goreng 🍗*
- 2 Ayam
- 4 Coal

*Steak 🥩*
- 2 Sapi
- 6 Coal

*Ikan Bakar 🐟*
- 3 Ikan
- 4 Coal

*Udang Bakar  🍤*
- 10 Udang
- 20 Coal

*Babi Panggang 🥓*
- 2 Babi
- 5 Coal


`
const sections = [
   {
	title: "𝗖𝗢𝗢𝗞𝗜𝗡𝗚 𝗙𝗢𝗢𝗗",
	rows: [
	    {title: "Ayam Bakar 🍗", rowId: ".cook ayamb", description: "+ 40 Stamina ⚡"},
	    {title: "Ayam Goreng 🍗", rowId: ".cook ayamg", description: "+ 50 Stamina ⚡"},
	    {title: "Steak 🥩", rowId: ".cook steak", description: "+ 70 Stamina ⚡"},
	    {title: "Ikan Bakar 🐟", rowId: ".cook ikan", description: "+ 44 Stamina ⚡"},
	    {title: "Udang Bakar 🍤", rowId: ".cook udang", description: "+ 60 Stamina ⚡"},
	    {title: "Babi Panggang 🥓", rowId: ".cook babi", description: "+ 58 Stamina ⚡"},

	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocook,
  buttonText: "𝗢𝗣𝗧𝗜𝗢𝗡",
  sections
}

  try {
    if (/cook|Cook/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ayamb':
          if (user.ayambakar > 100) return m.reply('*_Kulkas Kamu Penuh_*')
            if(user.ayam < 2 || user.coal < 4) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_2 Ayam 🐔_*\n*_4 Coal ⚫_*`)
            global.db.data.users[m.sender].ayam -= 2
            global.db.data.users[m.sender].coal -= 4
            global.db.data.users[m.sender].ayambakar += 1
            m.reply("*_Sukses Memanggang 1 Ayam Bakar 🍗_*")
            break
          case 'ayamg':
          if (user.ayamgoreng > 100) return m.reply('*_Kulkas Kamu Penuh_*')
            if(user.ayam < 2 || user.coal < 4) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_2 Ayam 🐔_*\n*_4 Coal ⚫_*`)
            global.db.data.users[m.sender].ayam -= 2
            global.db.data.users[m.sender].coal -= 4
            global.db.data.users[m.sender].ayamgoreng += 1
            m.reply("*_Sukses Menggoreng 1 Ayam Goreng 🍗_*")
            break
          case 'steak':
          if (user.steak > 100) return m.reply('*_Kulkas Kamu Penuh_*')
            if(user.sapi < 2 || user.coal < 6) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_2 Sapi 🐄_*\n*_6 Coal ⚫_*`)
            global.db.data.users[m.sender].sapi -= 2
            global.db.data.users[m.sender].coal -= 6
            global.db.data.users[m.sender].steak += 1
            m.reply("*_Sukses Memanggang 1 Steak 🥩_*")
            break
         case 'ikan':
          if (user.ikanbakar > 100) return m.reply('*_Kulkas Kamu Penuh_*')
            if(user.ikan < 3 || user.coal < 4) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_3 Ikan 🐟_*\n*_4 Coal ⚫_*`)
            global.db.data.users[m.sender].ikan -= 3
            global.db.data.users[m.sender].coal -= 4
            global.db.data.users[m.sender].ikanbakar += 1
            m.reply("*_Sukses Memanggang 1 Ikan Bakar 🐟_*")
            break
         case 'udang':
          if (user.udangbakar > 100) return m.reply('*_Kulkas Kamu Penuh_*')
            if(user.udang < 10 || user.coal < 20) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_10 Udang 🦐_*\n*_20 Coal ⚫_*`)
            global.db.data.users[m.sender].udang -= 10
            global.db.data.users[m.sender].coal -= 20
            global.db.data.users[m.sender].udangbakar += 1
            m.reply("*_Sukses Memanggang 1 Udang Bakar 🍤_*")
            break
         case 'babi':
          if (user.babipanggang > 100) return m.reply('*_Kulkas Kamu Penuh_*')
            if(user.babi < 2 || user.coal < 5) return m.reply(`*Bahan Tidak Cukup*\n\n*Kamu Memerlukan:*\n*_2 Babi 🐖_*\n*_5 Coal ⚫_*`)
            global.db.data.users[m.sender].babi -= 2
            global.db.data.users[m.sender].coal -= 5
            global.db.data.users[m.sender].babipanggang += 1
            m.reply("*_Sukses Memanggang 1 Babi Panggang 🥓_*")
            break

          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['cook']
handler.tags = ['rpg']
handler.command = /^(cook|cooking)/i
handler.register = true
export default handler