let handler = async m => m.reply(`
*EVENT LEADERBOARD 📋*

*Capai Top 5 Money Untuk Mendapatkan Prize*

Top 1 - 10M Money
Top 2 - 5M Money
Top 3 - 2,5M Money
Top 4 - 1,25M Money
Top 5 - 625K Money

Leaderboard Dicatat:
23:59 23/04/2023
`.trim()) // Tambah sendiri kalo mau


handler.help = ['event4']
handler.tags = ['rpg']
handler.command = /^event4$/i
handler.register = true
handler.premium = false
export default handler