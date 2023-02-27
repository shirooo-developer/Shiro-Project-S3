let handler = async m => m.reply(`
*Fitur suit gw hapus soalnya pada ngespam kontol*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['suit']
handler.tags = ['main','rpg']
handler.command = /^suit$/i
handler.register = true
handler.premium = false
export default handler