let handler = async m => m.reply(`
*LAST UPDATE 🆙*

*_Fitur Terakhir Kali Yang Diupdate_*
*_Date: 23/01/2023_*

#menu
#title-list
#infoupdate

*THANK YOU!!!*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoupdate']
handler.tags = ['main','rpg']
handler.command = /^infoupdate$/i
handler.register = true
handler.premiun = false
export default handler