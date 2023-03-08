
// let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '*_Contoh: #rob-int @Tag_*'
  if (typeof db.data.users[who] == 'undefined') throw '*Pengguna Tidak Ada Didalam Data Base*'
  let __timers = (new Date - global.db.data.users[m.sender].lastrobint)
  let _timers = (60000 - __timers) 
  let timers = clockString(_timers)
  let users = global.db.data.users
  if (new Date - global.db.data.users[m.sender].lastrobint > 60000){
  if (99999 > users[who].intelligence) throw '*Intelligence Target Dibawah Batas Minimal*'
  users[who].intelligence -= dapat * 1
  users[m.sender].intelligence += dapat * 1
  global.db.data.users[m.sender].lastrobint = new Date * 1
  conn.reply(m.chat, `*Berhasil Rob-int Intelligence Target Sebesar ${dapat}*`, m)

}else conn.reply(m.chat, `*Anda Sudah Rob-int Dan Berhasil Sembunyi , Tunggu ${timers} Untuk Rob-int Lagi*`, m)
}
handler.help = ['rob-int *@tag*']
handler.tags = ['rpg']
handler.command = /^rob-int$/
handler.limit = 10
handler.group = true
handler.level = 400

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}