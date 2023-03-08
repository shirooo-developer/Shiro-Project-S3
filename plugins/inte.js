let handler = async m => m.reply(`
*INTELLIGENCE 🧠*

*Intelligence Digunakan Untuk Bermain Fitur Math Dan Intelligence Tidak Dapat Dibeli Atau Didapatkan Dari Fitur RPG Lainnya, Intelligence Didapatkan Melalui#rob-int Untuk Mencuri Intelligence Milik Orang Lain*

`.trim()) // Tambah sendiri kalo mau


handler.help = ['inte']


handler.tags = ['rpg','main']


handler.command = /^inte$/i


handler.register = true


handler.premiun = false


export default handler