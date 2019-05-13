var bintang = ''

for(var i=0; i <= 5; i++){
    for(var k = 0; k<= 5-i; k++){ //bikin segitiga kebalik spasi
        bintang = bintang + '  ' 
    }
    
    for(var J=0; J<i; J++){ //bikin segitiga
        bintang = bintang + '* '
    }
    
    for(var j=0; j<i; j++){
        if(j>0){//bikin segitiga tambahan disamping
        bintang = bintang + '* '
    }} 
    bintang = bintang + '\n'
}
console.log(bintang);

console.log("solution 19:")

var x=0,z1="",limit=5

for(x;x<=limit;x++){
    for(y=0;y<(limit-x);y++){
        z1=z1+"  "
    }

    for(y=0;y<=limit-(limit-x);y++){
        z1=z1+"* "
        if(y!=0){
            z1=z1+"* "
        }
    }

    console.log(z1)
    z1=""
}
console.log("\n")