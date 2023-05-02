import axios from "axios"

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, '*Contoh: .tebakumur Felicia*', m)
  }

  await m.reply('*Searching...*')

  axios.get(`https://api.lolhuman.xyz/api/tebakumur?apikey=${global.lolkey}&name=${text}`)
    .then((res) => {
      let hasil = `*Namamu:* ${text}\n*Umurmu:* ${res.data.result.age}`
      conn.reply(m.chat, hasil, m)
    })
    .catch(() => {
      conn.reply(m.chat, '*Error!*', m)
    })
}

handler.help = ['tebakumur <nama>']
handler.tags = ['internet', 'fun']
handler.command = /^(tebakumur)$/i
handler.owner = false
handler.exp = 0
handler.limit = true
// https://github.com/uhdahlah
export default handler
