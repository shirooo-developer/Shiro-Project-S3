import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
  try {
    global.DATABASE.data.users[m.sender].lastbansos = global.db.data.users[m.sender].lastbansos || 0
    let user = global.db.data.users[m.sender]
    let buf = user.boostk
    let buff = (buf == 0 ? '0' : '' || buf == 1 ? '2' : '' || buf == 2 ? '4' : '' || buf == 3 ? '6' : '' || buf == 4 ? '8' : '' || buf == 5 ? '10' : '')
    let randomaku = `${Math.floor(Math.random() * 100)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 85 + buff)}`.trim() //hehe Biar Susah Menang :v
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let kbansos = 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg'
    let mbansos = 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg'
    let botol = global.wm
    let __timers = (new Date - global.db.data.users[m.sender].lastbansos)
    let _timers = (604800000 - __timers) 
    let timers = clockString(_timers)
    if (new Date - global.db.data.users[m.sender].lastbansos > 604800000) {
      if (Aku > Kamu) {
        conn.sendFile( m.chat, kbansos, 'b.jpg', `*Kamu Tertangkap Karena Korupsi Dan Kamu Didenda Sebesar 12000000 💵*`, m)
        user.money -= 12000000
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else if (Aku < Kamu) {
        user.money += 12000000
        conn.sendFile( m.chat, mbansos, 'b.jpg', `*Kamu Berhasil Korupsi Dan Kamu Mendapatkan Money Sebesar 12000000 💵*`, m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      } else {
        conn.sendButton( m.chat, `*Kamu Korupsi Tapi Gagal Dan Berhasil Melarikan Diri Tanpa Hasil*`, `${botol}`, null, [[`𝗠𝗘𝗡𝗨`, `${usedPrefix}menu`]], m)
        global.db.data.users[m.sender].lastbansos = new Date * 1
      }
    } else conn.sendButton(m.chat, `*Kamu Sudah Melakukan Koruspi, Silahkan Tunggu Sekitar*\n${timers}`, `${botol}`, null, [[`𝗠𝗘𝗡𝗨`, `${usedPrefix}menu`]], m)
  } catch (e) {
    throw `*ERROR*`
  }
}

handler.help = ['korupsi2']
handler.tags = ['rpg']
handler.command = /^(korupsi2)$/i
handler.group = true
handler.level = 400
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' Days ', h, ' Hours ', m, ' Minute ', s, ' Second '].map(v => v.toString().padStart(2, 0)).join('')
}