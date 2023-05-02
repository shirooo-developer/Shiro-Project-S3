let handler = async (m, { conn, participants }) => {
  const message = m.text.toLowerCase()
  let response = ''
  switch (true) {
    case /assalamualaikum|assalamu'alaikum/.test(message):
      response = 'Waalaikumsalam'
      break
    case /shalom/.test(message):
      response = 'Shalom'
      break
    case /namaste/.test(message):
      response = 'Namaste'
      break
    case /salam sejahtera/.test(message):
      response = 'Salam sejahtera'
      break
    default:
      response = 'Salam'
  }
  m.reply(response)
}

handler.help = ['Assalamualaikum', 'Shalom', 'Namaste', 'Salam sejahtera']
handler.tags = ['salam']

export default handler
