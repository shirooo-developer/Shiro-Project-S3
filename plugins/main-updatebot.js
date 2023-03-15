let handler = async m => m.reply(`
*Update 21:32 - 14/03/2023*

*Untuk Fitur Baru Cari Sendiri.* 
*Jika Ada Keluhan Untuk Update Ini*
*Bisa Hubungi wa.me/6281249122429

*Thanks Everyone 🤡*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['updatebot']


handler.tags = ['rpg','main']


handler.command = /^updatebot$/i


handler.register = true


handler.premiun = false


export default handler