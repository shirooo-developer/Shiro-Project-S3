import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 

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
            let exp = `${Math.floor(Math.random() * 100000)}`.trim()  
            let limit = `${Math.floor(Math.random() * 10)}`.trim() 
            let str = `

            
*PEMBEGALAN 🔪*\n\nKamu Berhasil Membegalnya

MP Kamu Berkuras ${health * 1}%

Rampasan:
 - Money ${uang} 💵
 - Exp ${exp} ✨
 - Limit ${limit} 🎟️
`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 600000)


            setTimeout(() => {

                   m.reply(`*Target melakukan perlawanan dan pertarungan badass pun terjadi selama ${pickRandom(['1 Menit', '10 Menit', '1 Jam', '10 Jam', '1 Hari', '1 Minggu', '1 Bulan', '1 Tahun', '5 Jam', '10 Hari','entah','kamu masih bernafas'])} ⏳*`)

                  }, 70000)

            setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} akan kamu begal*`)

                  }, 62000)

             setTimeout(() => {

                   m.reply(`*Kamu minjam ${pickRandom(['sabit', 'pisau', 'katana', 'pedang', 'golok', 'bambu runcing', 'tsar bomba', 'bom termobarik','senapan mesin','gas air mata','zangetsu','excalibur'])} ke orang random*`)

                  }, 1000)

             setTimeout(() => {

                   m.reply('*Mencari target begal 🔎*')

                  }, 15000)

             setTimeout(() => {

                   m.reply('*Berhasil menemukan target 🔍*')

                  }, 60000)

             setTimeout(() => {

                   m.reply('*Kamu hampir menang*')

                  }, 80000)

              setTimeout(() => {

                   m.reply(`*Kamu menyewa ${pickRandom(['polisi', 'tni', 'pembegal lain', 'teman', 'adek', 'mantan', 'kekuatan anime', 'wibu', 'anak epep', 'akuto','sakura','kobeni','akatsuki'])} untuk membantumu karena kamu hampir kalah*`)

                  }, 240000)

             setTimeout(() => {

                   m.reply('*Target hampir tumbang...*')

                  }, 300000)

 

             setTimeout(() => {

                   m.reply('*Sudah keliatan siapa yang win 🙂*')

                  }, 480000)

             setTimeout(() => {

                   m.reply(`*Kamu winnnnn karena kamu ${pickRandom(['lagi hokinya', 'dapat bantuan', 'user bot felicia', '....'])}*`)

                  }, 570000)

					

            global.db.data.users[m.sender].health -= health * 1
            global.db.data.users[m.sender].money += uang * 1
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