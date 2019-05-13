//1 bulan 30 hari
//1 tahun 360 hari

var hari_awal = 485
var tahun = Math.floor(hari_awal / 360)
var sisa_hari = hari_awal % 360
var bulan = Math.floor(sisa_hari / 30)


console.log('jumlah hari : ' + hari);
console.log('jumlah tahun : ' + tahun);
console.log('jumlah bulan : ' + bulan);


