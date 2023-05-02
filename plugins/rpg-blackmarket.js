const items = {
  "limit": { "name": "Limit", "price": 2348 },
  "exp": { "name": "Exp", "price": 2 },
  "semikonduktor": { "name": "Semikonduktor", "price": 50000 },
  "money": { "name": "Money", "price": 2 }
}

let handler = async (m, { conn, args }) => {
  let user = db.data.users[m.sender]
  let txt = args.join` `.toLowerCase()
  let matchedItems = Object.entries(items).filter(([name, { name: itemName }]) => itemName.toLowerCase().includes(txt) || name.includes(txt))
  let itemsStr = matchedItems.map(([name, { name: itemName, price }]) => `${name}: ${itemName} (${price} money)`).join`\n`
  if (!txt) return conn.reply(m.chat, `Daftar Item di Black Market:\n${itemsStr}`, m)
  let [buy, count = 1] = txt.split(/\s+/)
  count = parseInt(count)
  let item = items[buy]
  if (!item) return conn.reply(m.chat, `Item ${buy} tidak ditemukan!`, m)
  let total = count * item.price
  if (user.money < total) return conn.reply(m.chat, `Money kamu tidak mencukupi untuk membeli ${count} ${item.name}!`, m)
  let chance = Math.floor(Math.random() * 2) // random 0 atau 1
  if (chance === 0) {
    user.money -= total * 3 // denda 3 kali lipat dari harga item yang dibeli
    conn.reply(m.chat, `Maaf kamu gagal membeli ${count} ${item.name}! Karena itu kamu kena denda ${total * 3} money!`, m)
  } else {
    user.money -= total
    user[buy] += count
    conn.reply(m.chat, `Kamu membeli ${count} ${item.name} dengan harga ${total} money!`, m)
  }
}
handler.help = ['blackmarket <item> <jumlah>', 'blackmarket']
handler.tags = ['rpg']
handler.command = /^blackmarket?$/i

export default handler