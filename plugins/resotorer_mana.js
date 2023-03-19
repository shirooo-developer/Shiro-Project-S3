let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.mana >= 100) return m.reply(`
*_Mana ⚡_*
*_Sudah Penuh.._.*
`.trim())
let buf = user.cat
let buff = (buf == 0 ? '5' : '' || buf == 1 ? '10' : '' || buf == 2 ? '15' : '' || buf == 3 ? '20' : '' || buf == 4 ? '25' : '' || buf == 5 ? '30' : '' || buf == 6 ? '35' : '' || buf == 7 ? '40' : '' || buf == 8 ? '45' : '' || buf == 9 ? '50' : '' || buf == 10 ? '100' : '' || buf == 11 ? '100' : '') 
    const heal = 10 + (buff * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.mana) / heal)))) * 1
    if (user.manar < count) return m.reply(`
Tersisa *${user.manar}* ⚡ Mana Restorer
Ketik *${usedPrefix}buy potion ${count - user.manar}* Untuk Membeli ⚡ Mana Restorer
`.trim())
    user.manar -= count * 1
    user.mana += heal * count
    m.reply(`
Sukses Meminum *${count}* ⚡ Mana Restorer
`.trim())
}

handler.help = ['manar']
handler.tags = ['rpg']
handler.command = /^(manar)$/i
handler.register = true
handler.limit = 1
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}