import fetch from 'node-fetch'
import bo from 'dhn-api'

let handler = async (m, { conn }) => {
  const res = await bo.Darkjokes()
  const img = await (await fetch(res)).buffer()
  await conn.sendFile(m.chat, img, 'darkjokes.jpg', '', m)
}

handler.help = ['darkjoke', 'darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i
handler.limit = true
handler.register = false

export default handler
