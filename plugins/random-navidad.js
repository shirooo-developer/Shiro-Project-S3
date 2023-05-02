import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/navidad.json`)).data  
    let mystic = await res[Math.floor(res.length * Math.random())]
    let response = await axios.get(mystic, { responseType: 'arraybuffer' })
    await conn.sendFile(m.chat, response.data, 'mystic.jpg', `Results From Natal`, m)
}

handler.help = ['natal']
handler.tags = ['internet']
handler.command = /^(natal)$/i

export default handler
