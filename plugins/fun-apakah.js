let handler = async (m) => m.reply(`
*Pertanyaan:* ${m.text}
*Jawaban:* ${['Ya Mungkin','Gak','Iya','Iya Mungkin','Mungkin Saja','Mungkin','Kurang Tau','YTTA','Gak Tau','Tidak Mungkin','Tidak Akan','Mustahil','Mimpi?','Ngayal','G','Y','O'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.register = true
export default handler
