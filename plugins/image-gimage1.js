import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Example: ${usedPrefix}${command} Paimon*`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let whmods = `*${htki} GOOGLE IMAGE ${htka}*
    🔎 *Result:* ${text}
    🌎 *Source:* Google`
    //conn.sendFile(m.chat, link, '', whmods, m)
    conn.sendButton(m.chat, whmods, botdate, link, [['NEXT', `.image ${text}`]], m)
    /* conn.sendHydrated (m.chat,`
*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m) */
}
handler.help = ['gimage <query>', 'image <query>']

handler.command = /^(gimage|image)$/i

export default handler

