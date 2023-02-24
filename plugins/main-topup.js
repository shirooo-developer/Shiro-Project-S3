let handler = async m => m.reply(`
*Mau Top Up? Bisa Hubungi wa.me/6281249122429 Karena Price List Belum Dibuat.*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['topup']
handler.tags = ['main','rpg']
handler.command = /^topup$/i
handler.register = true
handler.premium = false
export default handler