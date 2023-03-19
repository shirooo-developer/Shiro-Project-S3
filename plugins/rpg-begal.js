import MessageType from '@adiwajshing/baileys'

let handler = async (m, { conn, participants, usedPrefix, owner }) => { 
let user = global.db.data.users[m.sender]
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

        let _timers = (7200000 - __timers) 

        let timers = clockString(_timers)

        if (global.db.data.users[m.sender].health > 99) {

            if (new Date - global.db.data.users[m.sender].lastbegal > 7200000) {


            let _health = `${Math.floor(Math.random() * 399)}`.trim()
            let health = (_health * 1)
            let uang = `${Math.floor(Math.random() * 200000)}`.trim()
            let xp = `${Math.floor(Math.random() * 200000)}`.trim()  
            let str = `

            
*PEMBEGALAN 🔪*\n\nKamu Berhasil Membegalnya

Health Kamu Berkurang ${health * 1}❤️

Rampasan:
 - Money ${uang} 💵
 - Exp ${xp} ✨
`.trim()          

            setTimeout(() => {

                  conn.sendMessage(m.chat, { text: str }, { quoted: m })

                  }, 1320000)


            setTimeout(() => {

                   m.reply('*Kamu Ingin Membegal Player Lain*')

                  }, 6000)

setTimeout(() => {

                   m.reply('*Kamu Menyiapkan Diri*')

                  }, 60000)
                  
setTimeout(() => {

                   m.reply('*Melancarkan Aksi*')

                  }, 120000)

setTimeout(() => {

                   m.reply('*Mencari Orang Yang Bisa Dibegal*')

                  }, 180000)

setTimeout(() => {

                   m.reply('*Musuh Terlihat!*')

                  }, 240000)
                  
 setTimeout(() => {

                   m.reply('*Maju Maju Maju!*')

                  }, 300000)                 

setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Akan Kamu Begal*`)

                  }, 360000)

setTimeout(() => {

                   m.reply('*Kamu Mulai Membegal*')

                  }, 420000)

setTimeout(() => {

                   m.reply('*Target Melakukan Perlawanan*')

                  }, 480000)

setTimeout(() => {

                   m.reply('*Pertarungan Terjadi*')

                  }, 540000)

setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Datang Membantumu Karena Sesama Pembegal*`)

                  }, 600000)

setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Membantu Targetmu Karena Dia ${pickRandom(['Sange Ke', 'Sayang Ke', 'Cinta Ke', 'Berteman Dengan', 'Sefrekuensi Dengan', 'Sejenis Dengan', 'Gak Sengaja Ngelihat'])} Target*`)

                  }, 660000)

setTimeout(() => {

                   m.reply('*Pertarungan Tak Terelakan Terjadi*')

                  }, 720000)       

setTimeout(() => {

                   m.reply(`*Pertarungan Menghancurkan ${pickRandom(['0', '1', '2', '3', '4', '5', '6', '7','8','9','10','11','94'])} ${pickRandom(['Rumah', 'Desa', 'Kota', 'Kabupaten', 'Kecamatan', 'Provinsi', 'Negara', 'Aliansi','Kerajaan','Kekaisaran','Planet','Bintang','Universe','Multiverse','Metaverse','Xenoverse','Hyperverse','Omniverse','Microverse','Hollowverse','Crossoververse','Paraverse','Fictionalized universe'])}*`)

                  }, 780000)      

setTimeout(() => {

                   m.reply(`*Pertarungan Terus Berlanjut Hinggah ${pickRandom(['372', '1', '2', '3', '4', '5', '6', '7','8','9','10','11','94'])} ${pickRandom(['Milenium', 'Dekade', 'Tahun', 'Bulan', 'Minggu', 'Hari', 'Jam', 'Menit','Detik','Milidetik'])}*`)

                  }, 840000)               
                  
setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Menonton Pertarunganmu Karena ${pickRandom(['Dia Bisa Saja Membantaimu', 'Takut', 'Lagi Santay', 'Tau Siapa Yang Menang', 'Dia Seperti Menonton Pertarungan Anak Kecil'])}*`)

                  }, 900000)  

setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} Tiba-Tiba Datang Dan Berusaha Menghentikan Pertarungan Tapi Gagal*`)

                  }, 960000)               

setTimeout(() => {

                   m.reply(`*@${who.split`@`[0]} : "Santay dlu gasih 😂"*`)

                  }, 1020000)   

setTimeout(() => {

                   m.reply('*Masih Belum Ditemukan Pemenang*')

                  }, 1080000)   

setTimeout(() => {

                   m.reply('*. . .*')

                  }, 1140000)       

setTimeout(() => {

                   m.reply('*Diakibatkan Oleh Banyak Faktor Kamu Pun Menang*')

                  }, 1200000)   

setTimeout(() => {

                   m.reply('*Finally*')

                  }, 1260000)                                       

					

            global.db.data.users[m.sender].health -= health * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].exp += xp * 1
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

handler.limit = 1

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