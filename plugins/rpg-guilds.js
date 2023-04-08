let handler = async (m) => {
  let guilds = Object.entries(global.db.data.guilds).map(([id, guild]) => {
    return {
      id,
      name: guild.name,
      leader: global.db.data.users[guild.leader].name,
      memberCount: Object.keys(guild.members).length,
      members: Object.values(guild.members).map(member => global.db.data.users[member].name)
    }
  })

  if (guilds.length === 0) {
    return m.reply(`Tidak ada guild yang terdaftar.`)
  }

  let message = "Daftar Seluruh Guild:\n\n"
  for (let guild of guilds) {
    message += `ID: ${guild.id}\nNama Guild: ${guild.name}\nLeader: ${guild.leader}\nJumlah Anggota: ${guild.memberCount}\nAnggota: ${guild.members.join(", ")}\n\n`
  }

  m.reply(message)
}

handler.command = /^guilds?$/i
handler.register = true
handler.group = true

export default handler
