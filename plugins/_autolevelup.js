import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
    
        m.reply(`
Selamat! Kamu telah mengalami kenaikan level yang luar biasa di game ini. Keahlianmu dalam bermain semakin terasah dan kamu telah melewati banyak tantangan yang berat. Teruslah mengembangkan kemampuanmu dan jangan pernah berhenti untuk menikmati setiap permainan. Kami harap kamu akan terus sukses dalam perjalananmu di game ini dan masa depan yang akan datang. Keep leveling up dan jadilah yang terbaik!

Progress Level Kamu 📊
${before} ➣ ${user.level}
• Tier: ${user.role}

- .lb Untuk Melihat Rank
- .lbglory Untuk Melihat Glory
⭐ Hinto:
"Bermainlah RPG untuk meningkatkan kemampuanmu dalam memetakan rencana kehidupanmu!"`.trim())
    }
    
   /* let looh = `*${before}* -> *${user.level}*`
      conn.send3ButtonImg(m.chat, pp, `Cᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴ, Aɴᴅᴀ Tᴇʟᴀʜ Nᴀɪᴋ Lᴇᴠᴇʟ!!`, looh, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/_b4c00t4an_s3l3b',
    mediaType: 2, 
    description: sgc,
    title: "Jᴏɪɴ Sɪɴɪ Cᴜʏ",
    body: wm,
    thumbnail: fs.readFileSync('./media/ok.jpg'),
    sourceUrl: sgc
   }}})*/
}
export const disabled = false
