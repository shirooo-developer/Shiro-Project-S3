import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*INVITE GROUP*
• 3 Hari IDR 0,000
• 7 Hari IDR 5,000
• 15 Hari IDR 10,000
• 30 Hari IDR 15,000
• 90 Hari IDR 35,000

Jika Berminat Hubungi:
*https://t.me/Christina_OWN*

*_#Real100%_*
*_#Mahal?Ditawar_*
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
