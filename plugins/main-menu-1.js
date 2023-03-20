import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offsetalldiii0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
//==============> Menu nya
let intro = `*_"Hotto" Wa "robotto" No Ryaku De, Tokutei No Tasuku O Jidouteki Ni Kurikaeshi Jikkou Suru Shisutemu Toshite Kaishaku Dekimasu. Hotto Wa Jidouteki Ni Dousa Suru Tame, Ningen Yori Mo Haruka Ni Hayaku Sagyou Suru Koto Ga Dekimasu. Sarani, Hotto Wa Ningen Ga Shudou Suru No O Matsu Koto Naku, Itsudemo Dousa Suru Koto Ga Dekimasu. Hotto Wa Tsuujou, Intaanetto O Kashite Dousa Shi, Watashi Wa 24-Jikan Kadori Suru Koto Ga Dekimasu._*\n\n*🏵️ F-Room Koushiki Guruupu:*\n*https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa*\n\n*🏵️ F-Club Koushiki Guruupu (NSFW Muryou):*\n*https://chat.whatsapp.com/EggiK9aee8JBbzBQseuSZT*`
conn.send3ButtonDoc(m.chat, `\n\n*Hai, Watashi Wa ⌬ Felicia-MD Desu. Yoroshiku Ne*\n\n`, intro + `\n ‎\n\n`, '𝗭𝗘𝗡 𝗠𝗘𝗡𝗬𝗨𝗨', '.? all', '𝗠𝗘𝗡𝗬𝗨𝗨 𝗜𝗖𝗛𝗜𝗥𝗔𝗡', '.tesm', '𝗞𝗘𝗜𝗛𝗜𝗡-𝗧𝗦𝗨𝗞𝗜 𝗞𝗨𝗜𝗭𝗨 ⭐', '.kuis', m, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: '                 𝗜 𝗡 𝗧 𝗥 𝗢 𝗗 𝗨 𝗖 𝗘'}}})
    } 
    
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)$/i
handler.register = true

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Mada Konna Jikan Ni Netenai No?"
  if (time >= 4) {
    res = "Ohayou Gozaimasu 🌄"
  }
  if (time >= 10) {
    res = "Konnichiwa ☀️"
  }
  if (time >= 15) {
    res = "Konbanwa 🌇"
  }
  if (time >= 18) {
    res = "Oyasumi Nasai 🌙"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}