let handler = async m => m.reply(`
Mau Lihat Menu? Lihat Di *.? Menu*

Perhatiakan Tanda *.?*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['menu']
handler.tags = ['main','rpg']
handler.command = /^menu$/i
handler.register = true
handler.premium = false
export default handler