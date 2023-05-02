import { format } from 'util'
import { spawn } from 'child_process'

// Font By MFarelS:V
let fontPath = 'src/font/Zahraaa.ttf'

const colors = {
  'merah': 'red',
  'biru': 'blue',
  'hijau': 'green',
  'ungu': 'purple',
  'hitam': 'black',
  'kuning': 'kuning',
  'pink': 'pink',
  'putih': 'white'
}

let handler = async (m, { conn, args }) => {
  if (!global.support.convert &&
      !global.support.magick &&
      !global.support.gm) return handler.disabled = true // Disable if doesnt support
  
  if (args.length < 2) {
    return conn.reply(m.chat, 'Silahkan masukan teks dan warna (hitam, merah, biru, hijau, kuning, ungu, putih, pink)\nContoh: #nulis saya suka belajar ngoding hijau', m)
  }
  
  let warna = args[args.length-1].toLowerCase()
  let teks = args.slice(0, -1).join(' ')
  
  if (!(warna in colors)) {
    return conn.reply(m.chat, 'Warna yang dimasukkan salah. Silahkan pilih dari antara hitam, merah, biru, hijau, kuning, ungu, putih, pink', m)
  }
  
  let inputPath = 'src/kertas/magernulis1.jpg'
  let d = new Date()
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let bufs = []
  const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
      'convert',
      inputPath,
      '-font',
      fontPath,
      '-size',
      '1024x784',
      '-pointsize',
      '20',
      '-interline-spacing',
      '1',
      '-annotate',
      '+806+78',
      hari,
      '-font',
      fontPath,
      '-size',
      '1024x784',
      '-pointsize',
      '18',
      '-interline-spacing',
      '1',
      '-annotate',
      '+806+102',
      tgl,
      '-font',
      fontPath,
      '-size',
      '1024x784',
      '-pointsize',
      '20',
      '-interline-spacing',
      '-7.5',
      '-fill',
      colors[warna],
      '-annotate',
      '+344+142',
      teks,
      'jpg:-'
  ]
  spawn(_spawnprocess, _spawnargs)
      .on('error', e => m.reply(format(e)))
      .on('close', () => {
          conn.sendFile(m.chat, Buffer.concat(bufs), 'nulis.jpg', 'By Keizha', m)
      })
      .stdout.on('data', chunk => bufs.push(chunk))
}
handler.help = ['#nulis <teks> <warna>']
handler.tags = ['nulis']
handler.command = /^nulis$/i
handler.register = false
handler.limit = 1
export default handler

// BY MFARELS NJEENK
// https://GitHub.com/MFarelS/
