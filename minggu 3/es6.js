// var nilai = 5
// var nilai = 10
// console.log(nilai);
// let angka = 5
// angka = 10
// console.log(angka);
// const pi = 3.14
// pi = 30
// console.log(pi);


// var nama = 'zondo', umur = 23
// var teks1 = 'nama antum ' + nama + ', umur ' + umur
// var teks2 = `
// nama antum ${nama}
// umur antum ${umur}`

// console.log(teks1);
// console.log(teks2);

// let angka = [1,2,3]
// function jumlah(x,y,z){
//     console.log(x+y+z);
// }
// jumlah (angka) //1,2,3undefinedundefined -> yang masuk ke parameter fungsi, hanya di x saja. y dan z tidak masuk
// jumlah(...angka)


// function jumlah (a,b,c){
//     return (a+b)*c
// }

// function hitung (a, b = 2, c = 5){
//     return (a+b)*c
// }

// console.log(jumlah(1,2,3));
// console.log(jumlah(2,4));
// console.log(hitung(2,5,6));
// console.log(hitung(2,7,3));
// console.log(hitung(2));

//arrow function

// var jumlah2 = (a, b = 2, c = 3) => {
//     return a + b * c
// }

// let hai = () => {console.log(`tes tes`);}
// let halo = () => console.log(`tes tis`);
// let hey = (nama) => {console.log(`hey tes tes ${nama}`);}
// let hoy = nama => console.log(`hoy ${nama}`);
// const pai = () => {return 3.14}
// const pai2 = () => (3*5)

// hai(); halo(); hey('hoy'); hoy('ahey'); console.log(pai()); console.log(pai2());

// var satu = (angka,fn,name) => {
//     console.log(`nilai number adalah ${angka}`);

//     fn(name)
    
// }

// var dua = (nama) => console.log(`halo ${nama}`);

// satu(23,dua,'anu')


// var hitung = (x,y,fn) => {
//     return fn(x,y)
// }

// var kali = (a,b) => {return a*b}
// var bagi = (a,b) => {return a/b}

// var hasilkali = hitung(4,5,kali)
// var hasilbagi = hitung(30,3,bagi)
// console.log(kali(5,6));
// console.log(bagi(30,5));
// console.log(hasilkali);
// console.log(hasilbagi);

// var retFunction = () => {
//     return (text) =>{
//         console.log(`tulisan yang masuk adalah ${text}`);
        
//     }
// }

// var hasil = retFunction ()

// hasil('susu')





// console.log(hasilFilter);
// }

//filter

// var funcFilter = (arr,fn) => {

//     var newArr = []
//     for (var i = 0; i < arr.length; i++){
//         if(fn(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// return newArr
// }
// var angka = [97,58,52,45,23,31,1,11,87,33]
// var hasilFilter = angka.filter((val) => {return val < 58})
// var hasilFilter2 = funcFilter(angka,(val) => {return val <58})

// console.log(hasilFilter);
// console.log(hasilFilter2);




// var funcMap = (arr, fun) => {
//     var newArr = []

//     for (var i=0; i<arr.length; i++){
//         newArr.push(fun(arr[i]))
//     }
//     return newArr
// }

// var angka = [1,2,3,4]
// var hasilMap = angka.map(val => val *2)
// var hasilMapFunc = funcMap(angka,val => val*2)

// console.log(hasilMap);
// console.log(hasilMapFunc);


// }
// var arrNumb = [1,4,9,16,25,36]
// var hasilmapping = arrNumb.map(val => val * 2)
// var hasilmapping2 = arrNumb.map(val => val < 24)
// var hasilmapping3 = hasilmapping.map(val => val * 3)

// console.log(arrNumb);
// console.log(hasilmapping);
// console.log(hasilmapping2);
// console.log(hasilmapping3);


//promise

// var library = new Promise((sukses, gagal) => {

//     var buku = []

//     if(buku.length == 0){
//         gagal('buku tidak tersedia')
//     }
//     else{
//         sukses('buku ada')
//     }
// })


// library.then((res) => (console.log(res))).catch((err) => (console.log(err)))


//destructuring array

// var buah = ['apel', 'durian', 'leci']

// var [a,b,c] = buah
// console.log(a);
// console.log(b);
// console.log(c);

//destructuring object

// var cuki = {
//     nama: 'cuki',
//     usia: 24,
//     pekerjaan: 'aua'
// }
// var {nama,usia,pekerjaan} = cuki
// console.log(nama);
// console.log(usia);
// console.log(pekerjaan);








//algorithm
// const fibo = (urut) => {
//     if (urut < 3){
//         return 1;
//     }
//     else {
//         return fibo (urut-1) + fibo(urut-2);
//     }
// }
// console.log(fibo(10));


function factorial(x) 
{ 

  if (x <=1)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(0));