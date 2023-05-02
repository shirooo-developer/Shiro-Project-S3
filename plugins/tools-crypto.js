import axios from 'axios'

const handler = async (m, { text }) => {
  if (!text) throw 'Silakan masukkan nama kripto yang ingin kamu cek harga nya'

  const coin = text.trim().toLowerCase()

  try {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&ids=${coin}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    const data = res.data[0]

    if (!data) throw 'Maaf, kripto yang kamu masukkan tidak tersedia atau salah nama'

    const { name, current_price, price_change_percentage_24h, market_cap_rank } = data

    const text = `Nama Kripto: ${name}\nHarga saat ini: Rp. ${current_price}\nPerubahan harga dalam 24 jam: ${price_change_percentage_24h}%\nRanking market cap: ${market_cap_rank}`

    m.reply(text)
  } catch (err) {
    console.error(err)
    throw 'Maaf, terdapat kesalahan saat mengambil data. Silakan coba lagi nanti'
  }
}

handler.help = ['crypto <nama kripto>']
handler.tags = ['tools']
handler.command = /^crypto$/i

export default handler
