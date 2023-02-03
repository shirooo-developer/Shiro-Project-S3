let handler = async m => m.reply(`
*LAST UPDATE 🆙*

*_Fitur Terakhir Kali Yang Diupdate_*
*_Date: 23/02/2023_*

Update dicicil biar kalian gak lama menunggu, soalnya ini sibuk juga lagi magang hehehe. Untuk updatenya cari tau sendiri tapi kalau semua sudah selesai nanti saya kabarin.

*THANK YOU!!!*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['infoupdate']
handler.tags = ['main','rpg']
handler.command = /^infoupdate$/i
handler.register = true
handler.premium = false
export default handler