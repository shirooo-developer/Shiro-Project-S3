let handler = async m => m.reply(`
Baik, berikut ini adalah daftar kode bahasa yang lebih lengkap:

• af : Afrikaans
• sq : Albanian
• am : Amharic
• ar : Arabic
• hy : Armenian
• az : Azerbaijani

• eu : Basque
• be : Belarusian
• bn : Bengali
• bs : Bosnian
• bg : Bulgarian
• my : Burmese

• ca : Catalan
• ceb: Cebuano
• zh : Chinese (Simplified)
• zh-TW : Chinese (Traditional)
• co : Corsican
• hr : Croatian
• cs : Czech

• da : Danish
• nl : Dutch
• en : English
• eo : Esperanto
• et : Estonian

• tl : Filipino
• fi : Finnish
• fr : French
• fy : Frisian

• gl : Galician
• ka : Georgian
• de : German
• el : Greek
• gu : Gujarati

• ht : Haitian Creole
• ha : Hausa
• haw: Hawaiian
• he : Hebrew
• hi : Hindi
• hmn: Hmong
• hu : Hungarian

• is : Icelandic
• ig : Igbo
• id : Indonesian
• ga : Irish
• it : Italian
• ja : Japanese
• jw : Javanese

• kn : Kannada
• kk : Kazakh
• km : Khmer
• rw : Kinyarwanda
• ko : Korean
• ku : Kurdish
• ky : Kyrgyz

• lo : Lao
• lv : Latvian
• lt : Lithuanian
• lb : Luxembourgish

• mk : Macedonian
• mg : Malagasy
• ms : Malay
• ml : Malayalam
• mt : Maltese
• mi : Maori
• mr : Marathi
• mn : Mongolian
• my : Burmese

• ne : Nepali
• no : Norwegian

• or : Oriya

• ps : Pashto
• fa : Persian/Farsi
• pl : Polish
• pt : Portuguese
• pa : Punjabi

• ro : Romanian
• ru : Russian

• sm : Samoan
• gd : Scottish Gaelic
• sr : Serbian
• st : Sesotho
• sn : Shona
• sd : Sindhi
• si : Sinhala
• sk : Slovak
• sl : Slovenian
• so : Somali
• es : Spanish
• su : Sundanese
• sw : Swahili
• sv : Swedish

• tg : Tajik
• ta : Tamil
• tt : Tatar
• te : Telugu
• th : Thai
• tr : Turkish
• tk : Turkmen

• uk : Ukrainian
• ur : Urdu
• ug : Uyghur
• uz : Uzbek

• vi : Vietnamese

• cy : Welsh

• xh : Xhosa

• yi : Yiddish

• yo : Yoruba

• zu : Zulu
`.trim()) // Tambah sendiri kalo mau
handler.help = ['kodebahasa']
handler.tags = ['internet','tools']
handler.command = /^kodebahasa$/i
handler.register = false
export default handler
