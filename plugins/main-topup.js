let handler = async m => m.reply(`
*Mau Top Up? Bisa Hubungi https://t.me/Christina_OWN Karena Price List Belum Dibuat.*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['topup']
handler.tags = ['main','rpg']
handler.command = /^topup$/i
handler.register = true
handler.premium = false
export default handler