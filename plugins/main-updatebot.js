let handler = async m => m.reply(`
*Update 12:00 - 8/03/2023*


_> Sekarang Level Maks ATM 10, Dan Sekarang Setiap Peningkatan Level ATM Sumber Daya Dibutuhkan Sesuai Level ATM_

_> Multiplier Dari 29 Ke 31 (Semakin Tinggi Multiplier Semakin Banyak Exp Dibutuhkan Untuk Naik Level)_

_> Sekarang EXP Berkurang 100K Saat Gagal Hunter Dan Cooldown Hunter Naik 1 Jam_

_> Fitur Korupsi Kini Menampilkan Data Yang Benar Dan Cooldown Menjadi 7 Hari_

_> Misi Baru Untuk Fitur #misi Sekaligus Perbaikan Dan Dibutuhkan 10 Limit_

_> Sekarang Kamu Bisa Melihat Pemain Dengan Rank Tertinggi Di #toprank_

_> Event4 Sekarang Bukan Top Money Tapi Rank Dan Hadiahnya Berubah_

_> Health Tidak Dibutuhkan Untuk Open Bo Tetapi Butuh Stamina_

_> Keseluruhan Rank/Role Diganti, Bisa Dicek Di #role_

_> Harga Jual Hewan Dipasar Naik Dari 100 Ke 250_

_> Inventory Sekarang Menampilkan Jumlah Coal_

_> Fitur Merkosa Sekarang Hanya Butuh 2 Limit_

_> Kini Leaderboard Hanya 1 Page 100 Orang_

_> Fitur OSR Kini Hanya Butuh 3 Limit_

_> Title Custom Baru Di #title-list_

_> Penjelasan Di Firur Tomoney_

_> Cooldown Mining + 2 Jam_

_> Cooldown Begal +1 Jam_


*Fitur Baru:*
#role
#toprank
#toprole
#rob-int
#top-up
#topup

*Fitur Dihapus:*
- Suit
- Ojek


*Thanks Everyone 🤡*
`.trim()) // Tambah sendiri kalo mau


handler.help = ['updatebot']


handler.tags = ['rpg','main']


handler.command = /^updatebot$/i


handler.register = true


handler.premiun = false


export default handler