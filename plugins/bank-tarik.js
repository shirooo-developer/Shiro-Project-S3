let handler = async (m, { conn, command, args }) => {
  let user = global.db.data.users[m.sender];
  
  // mendapatkan jumlah uang yang akan ditarik
  let count = command.replace(/^tarik/i, '');
  count = count ? /all/i.test(count) ? user.bank : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  
  // pengecekan apakah pengguna memiliki ATM
  if (user.atm == 0) {
    return conn.reply(m.chat, `Kamu belum memiliki ATM\n\nDapatkan ATM di #craft`, m);
  }
  
  // pengecekan apakah pengguna memiliki uang di bank yang cukup untuk ditarik
  if (user.bank < count) {
    return conn.reply(m.chat, `Uang kamu di bank tidak cukup\n\nJumlah yang ingin kamu tarik adalah ${count} Money 💵`, m);
  }
  
  // menentukan apakah terjadi korupsi atau tidak
  let probability = Math.random();
  if (probability < 0.2) {
    // jika terjadi korupsi
    let corruption = Math.ceil(count * 0.01); // besar korupsi adalah 1%
    user.bank -= corruption;
    conn.reply(m.chat, `Maaf, terjadi korupsi saat menarik uang 💸\n\n💸 Jumlah uang yang berhasil ditarik: ${count - corruption} Money 💵\n👮‍♂️ Dalam pengawasan: -${corruption} Money 💵\n\nTotal uang di bank kamu sekarang: ${user.bank} Money 💵\n\n*${global.bottime}*`, m);
  } else {
    // jika tidak terjadi korupsi
    user.bank -= count;
    user.money += count;
    conn.reply(m.chat, `TARIK UANG 💸\n\n📡 Status: Sukses\n💱 Menarik: ${count} Money 💵\n🏧 Total di Bank: ${user.bank} Money 💵\n📝 Catatan: Terima kasih telah menarik uang dari bank\n\n*${global.bottime}*`, m);
  }
};

handler.help = ['tarik <jumlah>', 'tarikall'];
handler.tags = ['rpg'];
handler.command = /^tarik(?:([0-9]+)|all)?$/i;
handler.limit = 1;

export default handler;