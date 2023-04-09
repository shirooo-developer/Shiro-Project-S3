const healthMax = 200; // jumlah maksimum health player
const healthRegen = 10; // jumlah health yang di-regen setiap 5 detik
const healthCooldown = 5; // waktu cooldown regen health dalam detik
const potionRegen = 50; // jumlah health yang di-regen oleh Potion

let handler = async (m, { usedPrefix }) => {
  let user = global.db.data.users[m.sender]

  let now = new Date().getTime()
  let healthCooldownEnd = user.lastmana + (healthCooldown * 1000)
  let timeLeft = (healthCooldownEnd - now) / 1000

  if (!user.potion || user.potion < 1) {
    return m.reply(`
*${user.name}*, Anda Tidak Memiliki Potion Untuk Mengembalikan Health!
  `.trim())
  }

  if (user.health >= healthMax) {
    return m.reply(`
*${user.name}* Sudah Memiliki Health Maksimum!
  `.trim())
  }

  if (now < healthCooldownEnd) {
    return m.reply(`
Harap Tunggu *${timeLeft.toFixed(0)} detik* Untuk Mendapatkan Health Kembali!
  `.trim())
  }

  user.health = Math.min(user.health + potionRegen, healthMax)
  user.lastmana = now
  user.potion -= 1

  let healthBar = getHealthBar(user.health, healthMax)

  m.reply(`
${healthBar}
*${user.name}* Telah Mendapatkan *${potionRegen} Health ❤️* Dengan Menggunakan Potion!
  `.trim())
}

handler.help = ['potion']
handler.tags = ['rpg']
handler.command = /^(potion)$/i
handler.register = true
function getHealthBar(health, maxHealth) {
  let healthBar = ''
  let healthPerHeart = maxHealth / 10
  let hearts = Math.ceil(health / healthPerHeart)
  for (let i = 1; i <= 10; i++) {
    if (i <= hearts) {
      healthBar += '❤️'
    } else {
      healthBar += '🖤'
    }
  }
  healthBar += `\n[${health}/${maxHealth}]`
  return healthBar
}

export default handler
