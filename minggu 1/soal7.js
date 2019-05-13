var kalimat1 = 'OWINGOKDWNGWN'
var panjang1 = kalimat1.length
var kalimat2 = kalimat1.replace(/N/g, '')
var panjang2 = kalimat2.length
var hasil = panjang1 - panjang2

console.log(hasil);
