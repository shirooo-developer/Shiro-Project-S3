import axios from 'axios'

let handler = async (m, { conn, text }) => {
  if (!text) {
    conn.reply(m.chat, 'Silakan masukkan kata kunci pencarian', m)
    return
  }

  try {
    let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=Shirooo&query=${encodeURIComponent(text)}`)
    let data = res.data.result
    if (!data.length) {
      conn.reply(m.chat, `Tidak ditemukan hasil pencarian untuk kata kunci "${text}"`, m)
      return
    }

    let video = data[0]
    let message = `
Title: ${video.title}
Views: ${video.views}
Duration: ${video.duration}
Link: ${video.link}
    `
    conn.reply(m.chat, message, m)
  } catch (e) {
    console.log(e)
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan', m)
  }
}

handler.help = ['xnxx <kata kunci>']
handler.tags = ['internet','nsfw']
handler.command = /^xnxx$/i

export default handler
