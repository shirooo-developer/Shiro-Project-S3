let handler = async m => m.reply(`
*MONEY CONVERSION RATE*

#tomoney9 - 1,10/10 
#tomoney8 - 1,25/10
#tomoney7 - 1,42/10
#tomoney6 - 1,60/10
#tomoney5 - 2,00/10
#tomoney4 - 2,50/10
#tomoney3 - 3,33/10
#tomoney2 - 5,00/10
#tomoney1 - 10,00/10

*_Semakin Tinggi Rate_*
*_Semakin Kecil Juga Pajak:)_*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['tomoney']
handler.tags = ['main','rpg']
handler.command = /^tomoney$/i
handler.register = true
handler.premiun = false
export default handler