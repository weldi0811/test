let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'Dev'},  // ALVIN -> alvin (/toLowerCase()) 
    {nama: 'Alicia', umur: 32, job: 'Dev'},
    {nama: 'Alona', umur: 26, job: 'Dev'},
    {nama: 'Batios', umur: 33, job: 'CEO'},
    {nama: 'Bakhti', umur: 38, job: 'PM'},
    {nama: 'Charlee', umur: 27, job: 'CTO'}
];

let arrJob = [
    'All' ,'Dev', 'CEO', 'PM', 'CTO'
];

// [tr, tr, tr, tr, tr, tr]
// Merender list data ke tabel
var funShow = () => {
    var listManusia = arrManusia.map((val) => { // val = {name, age,  job}
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    var listJob = arrJob.map(val => { // val = string seperti 'All', 'Dev', 'CEO'
        return `<option>${val}</option>`
    })

    document.getElementById('here').innerHTML = listManusia.join('')
    document.getElementById('job').innerHTML = listJob.join('')

}

// Input Data
var funInputData = () => {
    var NAMA = document.getElementById('nama').value
    var UMUR = document.getElementById('umur').value
    var JOB = document.getElementById('jobInput').value

    // nambahin kondisi dimana input kerjaan kalau dibawah 3 huruf(singkatan) auto caps, kalau lebih dari 3 huruf, cuma ambil huruf pertama lalu di caps
    // NAMA = NAMA.toLowerCase()
    // NAMA = NAMA.charAt(0).toUpperCase() + NAMA.slice(1) //slice dari index ke-1 ->habis, karena ga ada parameter kedua.

    //tes split string
    var NAMA = document.getElementById('nama').value
    var kapitalSplit = NAMA.toLowerCase().split(' ')
    var hasilKapital = kapitalSplit.map( val =>{ return val.charAt(0).toUpperCase() + val.slice(1); });

    if(JOB.length>3){ //inputan di jobinput, kalau length lebih dari 3
    var jobSplit = JOB.toLowerCase().split(' ')
    var jobKapital = jobSplit.map( val =>{ return val.charAt(0).toUpperCase() + val.slice(1); }); //charAt index ke 0, di uppercase
    var JOB = jobKapital
}
    else{
        JOB = JOB.toUpperCase()
    }

    arrManusia.push({
        nama: hasilKapital.join(' '),
        umur: UMUR,
        job: JOB.join(' ')
    })

    if(arrJob.includes(JOB) == false){
        arrJob.push(JOB)
    }


    funShow()
    document.getElementById('myForm').reset()

}

// FILTER NAME
var funFilterName = () => {
    var filter = document.getElementById('search').value
    var test = []
    var list = []

    for (var i = 0; i < arrManusia.length; i++){
        var name = arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()
        
        if(name.includes(input)){ // true of false
            test.push(arrManusia[i])
        }

    }

    list = test.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
    
}

var fn3 = () =>{
    var umur1 = document.getElementById('num1').value
    var umur2 = document.getElementById('num2').value

    if(!(umur1 == '' || umur2 =='')){//bikin 22nya mesti keisi baru mau jalan
    var list = arrManusia.filter(val => {
        return(val.umur >= umur1 && val.umur<=umur2)
    })
}
    else{
        list = arrManusia
    }
    

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })
    document.getElementById('here').innerHTML = list.join('')
    }

    // if(umur1 != null){
    //     for(var i = 0; i < arrManusia.length; i++){
    //         var usia = parseInt(arrManusia[i].umur)
    //         var inputumur1 = parseInt(umur1)
    //             if(usia>=inputumur1){
    //                 testumur.push(arrManusia[i])
    //             } 
    //     }
    // }
    // if(umur2 != null){
    //     for(var i=0; i< arrManusia.length; i++){
    //         var usia=parseInt(arrManusia[i].umur)
    //         var inputumur2 = parseInt(umur2)
    //             if(usia<=inputumur2){
    //                 testumur.push(arrManusia[i])
    //             }
    //     }
    // }

    // if(testumur.includes(usia)){ // true of false
    //     testumur.push(arrManusia[i])
    // }
    


var fn4 = () =>{
    var filter4 = document.getElementById('job').value
    // var test = []
    // var list = []

    if (filter4 == 'All'){
        var list = arrManusia
    }
    else {
        
        var list = arrManusia.filter(val => {
        
            return (val.job.includes(filter4))
        })
    }

    // for (var i = 0; i < arrManusia.length; i++){
    //     var job = arrManusia[i].job.toLowerCase()
    //     var input = filter.toLowerCase()

    //     if(input == 'all'){
    //         test.push(arrManusia[i])
    //     }
        
    //     if(job.includes(input)){ // true of false
    //         test.push(arrManusia[i])
    //     }

    // }

    list = list.map(val => {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr>`
    })

    document.getElementById('here').innerHTML = list.join('')
}

funShow()