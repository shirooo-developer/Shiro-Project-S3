import convert from 'convert-units'

let handler = async (m, { conn, text }) => {
  if (!text) {
    return conn.reply(m.chat, 'Silakan masukkan nilai dan satuan yang ingin dikonversi (contoh: 100 cm to m)', m)
  }

  try {
    let [fromValue, fromUnit, _, toUnit] = text.split(' ')
    let result = convert(fromValue).from(fromUnit).to(toUnit)

    let message = `${fromValue} ${fromUnit} = ${result} ${toUnit}`
    conn.reply(m.chat, message, m)
  } catch (e) {
    conn.reply(m.chat, 'Format yang Anda masukkan salah. Silakan coba lagi dengan format yang benar (contoh: 100 cm to m)', m)
  }
}

handler.help = ['convert <nilai> <satuan> to <satuan tujuan>']
handler.tags = ['tools']
handler.command = /^(convert|konversi)$/i

export default handler
