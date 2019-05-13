var bintang = ''
var counter = 5
for(var baris = 0; baris<counter; baris++)
{
    for (var kolom =0; kolom<baris; kolom++)
    {
        bintang += ' * '
    }
    bintang += '\n'

}


for(baris = counter-1; baris>=0;baris--){
    for (kolom = 0; kolom<baris-1; kolom++){
        bintang += ' * '
    }
    bintang += '\n'
}
console.log(bintang)