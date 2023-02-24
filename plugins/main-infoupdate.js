let handler = async m => m.reply(`
*LAST UPDATE 🆙*

*_Fitur Terakhir Kali Yang Diupdate_*
*_Date: 24/02/2023_*

Cari Sendiri.

*THANK YOU!!!*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoupdate']
handler.tags = ['main','rpg']
handler.command = /^infoupdate$/i
handler.register = true
handler.premium = false
export default handler