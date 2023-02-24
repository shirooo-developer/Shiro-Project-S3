import fetch from 'node-fetch'
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButtonImg(m.chat, a, "Results From Hackers", "By Keizha", '𝗡𝗘𝗫𝗧', ".hacker", m)
}
handler.help = ['hacker']
handler.tags = ['internet']
handler.command = /^hacker$/i
handler.limit = 1
handler.register = true
export default handler
