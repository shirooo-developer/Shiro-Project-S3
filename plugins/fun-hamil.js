let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`*${toM(a)} Dihamilin Sama ${toM(b)}*`, null, {
        mentions: [a, b]
    })
}
handler.help = ['hamil']
handler.tags = ['fun']
handler.command = ['hamil']
handler.register = true
handler.group = true

export default handler