// // var arrNumber = [20, 10, 15, 51, 56, 30,2,7,5,55]
// // console.log(arrNumber.sort());
// // console.log(arrNumber.sort(function(x,y){return x - y}));
// // console.log(arrNumber.sort(function(x,y){return y - x}));


// //object

// // var manusia = {
// //     nama_depan: 'asu',
// //     nama_belakang: 'babi',
// //     usia: 25,
// //     job: 'cok',
// //     namaFull : function() {
// //         return this.nama_depan + ' ' + this.nama_belakang
// //     },
// //     sayhello : function(nama){
// //         console.log('hai ' + nama);
// //     }
// // }

// // var nama_lengkap = manusia.namaFull()
// // console.log(manusia.namaFull());
// // manusia.sayhello('susu')
// // manusia.sayhello(manusia.namaFull())


// // var manusia = function (nama,umur,job){ //template -> function expression
// //     this.nama_depan = nama
// //     this.usia = umur
// //     this.pekerjaan = job
// // }

// // function manusia2(nama,umur,job){ //template -> function declaration
// //     this.nama_depan = nama
// //     this.usia = umur
// //     this.pekerjaan = job
// // }

// // var satu = new manusia('asu', 25, 'polisi')
// // var satu2 = new manusia2('babi', 25, 'pemancing')
// // console.log(satu);
// // console.log(satu2);


// var objOne = {
//     propOne: 'string biasa',
//     propTwo: {
//         sub_prop_one: 23,
//         sub_prop_two: function(x){
//             console.log('sub property two ' + x);
//         }
//     },
//     propThree : ['red','green','blue'],
//     propFour: [
//         12,
//         {insideOne: 44, insideTwo: 45}
//     ]
//     }


// // console.log(objOne.propTwo.sub_prop_one);
// // objOne.propTwo.sub_prop_two()
// // objOne.propTwo.sub_prop_two(objOne.propTwo.sub_prop_one)
// // console.log(objOne.propFour[1].insideTwo)


// // var hari = { 
// //     ke1: 'senin',
// //     ke2: 'selasa',
// //     ke3: 'rabu',
// //     ke4: 'skamis',
// //     ke5: 'jumat',
// //     ke6: 'sabtu',
// // }

// // var namaProp

// // for (namaProp in hari){
// //     console.log(namaProp + ': ' + hari[namaProp]);
// // }


// function people (name, age, job){
//     this.name = name
//     this.age = age
//     this.job = job
// }

// people.prototype.address = 'jakarta';

// var alvin = new people('alvin', 40, 'freelancer')

// console.log(people.name);
// console.log(alvin.address);



//class
class makhlukHidup{
    constructor(place,hidup){ //tempat bikin propertynya
        this.tinggal = place
        this.bernyawa = hidup
        
    }
    
    makan(){
        console.log('lagi makan');
        
    }
    bernafas(){
         console.log('lagi nafas');
         
    }   
    }


class manusia extends makhlukHidup{
    constructor(place,hidup,mind){
        super(place,hidup)
        this.akal = mind
    }

    bekerja(){
        console.log('lagi kerja');
        
    }


}

class hewan extends makhlukHidup{
    constructor(place,hidup,telur,anak){
        super(place,hidup)
        this.egg = telur
        this.kid = anak
    }

    berburu(){
        console.log('hewan berburu');
    }
}

class tumbuhan extends makhlukHidup{
    constructor(place,hidup,bunga,buah){
        super(place,hidup)
        this.flower = bunga
        this.fruit = buah
    }
    fotosintesis(){
    console.log('tumbuhan fotosintesis');
    }
}



var manusia1 = new manusia('a', 2, 'c')
var hewan1 = new hewan('hutan', true, true, false)
var tumbuhan1 = new tumbuhan('tanah','yoi', 'berbunga', 'berbuah')



console.log('ini hewan');
console.log(hewan1.tinggal);
console.log(hewan1.kid);
console.log(manusia1.tinggal);







