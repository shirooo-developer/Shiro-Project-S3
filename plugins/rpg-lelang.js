let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];
  
  // Cek apakah pengguna memiliki item yang ingin dilelang
  if (!args[0]) {
    return conn.reply(m.chat, `Silakan tentukan item yang ingin kamu lelang.`, m);
  }
  
  // Cek apakah pengguna memiliki harga awal yang ditentukan
  if (!args[1] || isNaN(parseInt(args[1]))) {
    return conn.reply(m.chat, `Silakan tentukan harga awal untuk lelangmu.`, m);
  }
  
  // Cek apakah pengguna telah menentukan berapa lama lelang akan berlangsung
  if (!args[2] || isNaN(parseInt(args[2]))) {
    return conn.reply(m.chat, `Silakan tentukan berapa lama lelang akan berlangsung (dalam menit).`, m);
  }
  
  // Ambil data lelang dari database
  let lelang = global.db.data.lelang;
  
  // Buat data baru untuk lelang yang akan dibuat
  let item = args[0];
  let harga_awal = parseInt(args[1]);
  let waktu_lelang = parseInt(args[2]) * 60 * 1000; // Konversi menit ke milidetik
  let waktu_sekarang = Date.now();
  let waktu_selesai = waktu_sekarang + waktu_lelang;
  let pemenang = '';
  let harga_tertinggi = harga_awal;
  
  // Cek apakah pengguna memiliki item tersebut
  if (!user.inventory[item]) {
    return conn.reply(m.chat, `Kamu tidak memiliki ${item} untuk dilelang.`, m);
  }
  
  // Cek apakah item tersebut sudah dilelang sebelumnya
  if (lelang[item]) {
    return conn.reply(m.chat, `Item ${item} sudah dilelang sebelumnya.`, m);
  }
  
  // Cek apakah harga awal lebih rendah dari nol
  if (harga_awal < 0) {
    return conn.reply(m.chat, `Harga awal tidak boleh lebih rendah dari nol.`, m);
  }
  
  // Kurangi jumlah item di inventory pengguna
  user.inventory[item]--;
  
  // Simpan data lelang ke database
  lelang[item] = {
    penjual: m.sender,
    harga_awal,
    waktu_mulai: waktu_sekarang,
    waktu_selesai,
    harga_tertinggi,
    pemenang
  };
  
  // Kirim pesan konfirmasi ke pengguna
  conn.reply(m.chat, `Lelang ${item} telah dimulai dengan harga awal ${harga_awal} Money 💵.\n\nLelang akan berlangsung selama ${args[2]} menit.\n\nSilakan tunggu hingga lelang selesai untuk melihat siapa yang menjadi pemenang.\n\n*${global.bottime}*`, m);
};

handler.help = ['lelang <item> <harga awal> <lama lelang (menit)>'];
handler.tags = ['rpg'];
handler.command = /^lelang$/i;
handler.register =
