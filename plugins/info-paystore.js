import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa'
         let caption = `PREMIUM PRICE LIST & RENT

╭━━━━━━━━━━━━━⎔
┃
┠• *SEWA*
┃ 3 Hari: 4K/Grup
┃ 7 Hari: 7K/Grup
┃ 15 Hari: 13K/Grup
┃ 30 Hari: 23K/Grup
┃ 90 Hari: 43K/Grup
┃
┠• *PREMIUM*
┃ 3 Hari:  5K/User
┃ 7 Hari:  9K/User
┃ 15 Hari:  14K/User
┃ 30 Hari:  24K/User                             
┃ 90 Hari:  45K/User
┃
┠• *SEWA + PREMIUM*
┃ 3 Hari:  7K/User
┃ 7 Hari:  15K/User
┃ 15 Hari:  25K/User
┃ 30 Hari:  40K/User                             
┃ 90 Hari:  70K/User
┃
┠• *Unlock NSFW*
┃ 3 Hari:  3K/Grup
┃ 7 Hari:  5K/Grup
┃ 15 Hari:  8K/Grup
┃ 30 Hari:  13K/Grup                             
┃ 90 Hari:  23K/Grup
┃
┃
┠━━━━━━━━━━━━━⎔
┃ *PAYMENT:*
┃ *Dana, OVO, Gopay, Pulsa,*
┃ *& All Type Bank*
╰━━━━━━━━━━━━━⎔

*Kelebihan Sewa?*
 • Tambahkan Bot Ke Grupmu

*Kelebihan Premium?*
 • Prioritas
 • Unlimited Limit
 • Unlock Semua NSFW
 • Dapat Menggunakan Fitur:
    - .stickerwm
    - .jadianime
    - .videoxxxlesbi
    - .setcmd
    - .filebokep
    - .stickersearch
    - .pack1
    - .hentai
    - .kicknum
    - .listanum
   Dan Lebih Banyak Lagi.
   
*Kelebihan Unlock NSFW?*
 • Membuka Semua NSFW Digrupmu

Diskon 20% Untuk Pembelian Pertama

Ingin Sewa Bot / Premium? Hub.
*wa.me/6281249122429*


*_#TrustedButNotFamous_*
`
         await conn.sendButtonDoc(m.chat, caption, wm, '𝗢𝗪𝗡𝗘𝗥', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: '𝗠𝘆 𝗚𝗿𝗼𝘂𝗽 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹', 
               body: '⌬ 𝗙𝗲𝗹𝗶𝗰𝗶𝗮-𝗠𝗗',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['sewa','sewagc','sewapremium','sewagrup','sewabot']
handler.tags = ['info','main']
handler.command = /^sewabot|sewa|sewapremium|sewagrup|sewagc$/i
export default handler