import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, command }) => {
await m.reply(`*Dasar Pedo*`)
  let res = await fetch('https://raw.githubusercontent.com/binjaicity/warga62/master/bocil.json')
  //if (!res.ok) throw await res.json()
  let asup = await res.json()
  let json = asup[Math.floor(Math.random() * asup.length)]
  //if (!json.url) throw 'Error!'
  conn.sendButtonVid(m.chat, json.url, command, wm, command, `${usedPrefix} command`, m)
}
handler.help = ['asupan-bocil']
handler.tags = ['nsfw']
handler.limit = 1
handler.register = true
handler.command = /^(asupan-bocil)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
