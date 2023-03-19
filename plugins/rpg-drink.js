let handler = async (m, { args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    if (user.stamina >= 500) return m.reply(`
*_Stamina ⚡_*
*_Sudah Penuh.._.*
`.trim())
let buf = user.cat
let buff = (buf == 0 ? '5' : '' || buf == 1 ? '10' : '' || buf == 2 ? '15' : '' || buf == 3 ? '20' : '' || buf == 4 ? '25' : '' || buf == 5 ? '30' : '' || buf == 6 ? '35' : '' || buf == 7 ? '40' : '' || buf == 8 ? '45' : '' || buf == 9 ? '50' : '' || buf == 10 ? '100' : '' || buf == 11 ? '100' : '') 
    const heal = 10 + (buff * 4)
    let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((100 - user.stamina) / heal)))) * 1
    if (user.drink < count) return m.reply(`
Tersisa *${user.drink}* Drink 🍹
Ketik *${usedPrefix}buy drink ${count - user.drink}* Untuk Membeli Drink 🍹
`.trim())
    user.drink -= count * 1
    user.stamina += heal * count
    m.reply(`
Sukses Meminum *${count}* Drink 🍹
`.trim())
}

handler.help = ['drink']
handler.tags = ['rpg']
handler.command = /^(drink)$/i
handler.register = true
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}