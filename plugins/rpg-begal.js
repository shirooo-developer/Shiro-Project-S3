import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 
let buf1 = user.boostb
let buff1 = (buf1 == 0 ? '0' : '' || buf1 == 1 ? '2' : '' || buf1 == 2 ? '3' : '' || buf1 == 3 ? '4' : '' || buf1 == 4 ? '5' : '' || buf1 == 5 ? '6' : '' || buf1 == 6 ? '35' : '' || buf1 == 7 ? '40' : '' || buf1 == 8 ? '45' : '' || buf1 == 9 ? '50' : '' || buf1 == 10 ? '100' : '')
    try { 

    	let who
    if (!m.isGroup) {
        let member = [m.sender, conn.user.jid]
        who = member[Math.floor(Math.random() * member.length)]
    } else {
        let member = participants.map(u => u.id)
        who = member[Math.floor(Math.random() * member.length)]
    }
        let __timers = (new Date - global.db.data.users[m.sender].lastbegal)

        let _timers = (3600000 - __timers) 

        let timers = clockString(_timers)

        if (global.db.data.users[m.sender].health > 99) {

            if (new Date - global.db.data.users[m.sender].lastbegal > 3600000) {


            let _health = `${Math.floor(Math.random() * 199)}`.trim()
            let health = (_health * 1)
            let uang = `${Math.floor(Math.random() * 200000)}`.trim()
            let xp = `${Math.floor(Math.random() * 100000)}`.trim()  
            let batas = `${Math.floor(Math.random() * 10)}`.trim() 
            let berlian = `${Math.floor(Math.random() * 2)}`.trim() 
            let str = `

            
*PEMBEGALAN 🔪*\n\nKamu Berhasil Membegalnya

Health Kamu Berkurang ${health * 1}❤️

Rampasan:
 - Money ${uang} 💵
 - Exp ${xp} ✨
 - Limit ${batas} 🎟️
 - Gems ${berlian} 💠
`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 600000)


            setTimeout(() => {

                   m.reply(`*Kamu Dan Target Bertarung Selama ${pickRandom(['1 Menit', '10 Menit', '1 Jam', '10 Jam', '1 Hari', '1 Minggu', '1 Bulan', '1 Tahun', '5 Jam', '10 Hari','Kamu Menyerah','Target Menyerah'])} ⏳*`)

                  }, 70000)

            setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Akan Kamu Begal*`)

                  }, 62000)

             setTimeout(() => {

                   m.reply(`*Kamu Menggunakan ${pickRandom(['Sabit', 'Pisau', 'Katana', 'Pedang', 'Golok', 'Bambu Runcing', 'Tsar Bomba', 'Bom Termobarik','Senapan Mesin','Gas Air Mata','Zangetsu','Excalibur'])} Untuk Membegal*`)

                  }, 1000)

             setTimeout(() => {

                   m.reply('*Mencari Target Begal 🔎*')

                  }, 15000)

             setTimeout(() => {

                   m.reply('*Berhasil Menemukan Target 🔍*')

                  }, 60000)

             setTimeout(() => {

                   m.reply('*Kamu Akan Menang*')

                  }, 80000)

              setTimeout(() => {

                   m.reply(`*Kamu Mendapatkan Bantuan Dari ${pickRandom(['Polisi', 'TNI', 'Pembegal Lain', 'Teman', 'Adik', 'Mantan', 'Kekuatan Anime', 'Wibu', 'Anak EPEP', 'Akuto','Sakura','Kobeni','Akatsuki','Nazi','PKI'])}*`)

                  }, 240000)

             setTimeout(() => {

                   m.reply('*Target Akan Kalah...*')

                  }, 300000)

 

             setTimeout(() => {

                   m.reply('*Perbedaan Kekuatan Terlihat...*')

                  }, 480000)

             setTimeout(() => {

                   m.reply(`*Pemenangnya Adalah Kamu Karena ${pickRandom(['Lagi Hokinya', 'Dapat Bantuan', 'User Bot Felicia', '....','MC'])}*`)

                  }, 570000)

					

            global.db.data.users[m.sender].health -= health * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].limit += batas * buff1
            global.db.data.users[m.sender].exp += xp * 1
            global.db.data.users[m.sender].gems += berlian * 1
            global.db.data.users[m.sender].lastbegal = new Date * 1
            } else conn.reply(m.chat, `Anda Sudah Membegal Dan Kelelahan, Silahkan Tunggu Selama *${timers}*`, m)
        } else conn.reply(m.chat, 'Minimal 100 Health Untuk Bisa Membegal, Silahkan Beli Dan Gunakan Potion Untuk Menambah Health Dengan Cara\n\nMembeli\n • *' + usedPrefix + 'buy potion jumlah*\nMenggunakan\n • ' + usedPrefix + 'heal', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['begal']

handler.tags = ['rpg']

handler.command = /^(begal)$/i

handler.limit = 3

handler.group = true

handler.fail = null



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