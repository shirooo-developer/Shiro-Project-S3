import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/HanfYszpKzbGcCGgWdHLTa'
         let caption = `TOP-UP PRICE LIST

╭━━━━━━━━━━━━━⎔
┃
┠• *Gems*
┃ 70 Gems: IDR 9000
┃ 100 Gems: IDR 12000
┃ 350 Gems: IDR 30000
┃ 720 Gems: IDR 50000
┃ 1230 Gems: IDR 75000
┃
┠• *Limit*
┃ 70 Limit:  IDR 6000
┃ 100 Limit:  IDR 9000
┃ 350 Limit:  IDR 24000
┃ 720 Limit:  IDR 30000      
┃ 1230 Limit:  IDR 45000
┃
┠━━━━━━━━━━━━━⎔
┃ *PAYMENT:*
┃ *Dana, OVO, Gopay, Pulsa,*
┃ *& All Type Bank*
╰━━━━━━━━━━━━━⎔

*Berani Menawar Berani Berdebat!*

Ingin Top-Up? Hub.
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
 handler.help = ['topup','top-up']
handler.tags = ['info','main']
handler.command = /^topup|top-up$/i
export default handler