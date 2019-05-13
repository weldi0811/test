var nama = prompt ('masukkan nama anda :')
var nMat = parseInt(prompt ('masukkan nilai matematika : ')) //bisa pake parseInt, bisa langsung definisiin sbg number diawal
var nIndo = Number(prompt ('masukkan nilai bahasa Indonesia : '))
var nIng = parseInt(prompt ('masukkan nilai bahasa Inggirs : '))
var nIpa = parseInt(prompt ('masukkan nilai IPA : '))


var average = (nMat + nIndo + nIng + nIpa) / 4

console.log('halo ' +nama + ' , ')
if (average >= 85) {
    console.log('nilai rata-rata anda : ' +average)
    console.log('nilai anda : A');
    console.log('anda lulus');
    alert ('hai ' +nama+ ',' + ' nilai rata-rata anda : ' +average + ' nilai anda : A' + ' anda lulus')
} else if (average >= 76 ){
    console.log('nilai rata-rata anda : ' +average)
    console.log('nilai anda : B');
    console.log('anda lulus');
    alert ('hai ' +nama+ ',' + ' nilai rata-rata anda : ' +average + ' nilai anda : B' + ' anda lulus')
} else if (average >= 66){
    console.log('nilai rata-rata anda : ' +average)
    console.log('nilai anda : C')
    console.log('anda lulus')
    alert ('hai ' +nama+ ',' + ' nilai rata-rata anda : ' +average + ' nilai anda : C' + ' anda lulus')
} else if(average >= 50){
    console.log('nilai rata-rata anda : ' +average)
    console.log('nilai anda : D');
    console.log('anda tidak lulus');
    alert ('hai ' +nama+ ',' + ' nilai rata-rata anda : ' +average + ' nilai anda : D' + ' anda tidak lulus')
} else {
    console.log('nilai rata-rata anda : ' +average)
    console.log('nilai anda : E');
    console.log('anda tidak lulus');
    alert ('hai ' +nama+ ',' + ' nilai rata-rata anda : ' +average + ' nilai anda : E' + ' anda tidak lulus')
}