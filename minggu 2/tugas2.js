var bintang = ''
var counter = 5
for (var baris =1; baris<=counter ; baris++)
{
    for (var kolom=baris; kolom<=counter ;kolom++)
    {
    bintang += ' * '
}
    bintang += '\n'
}

for(var baris = 1; baris<=counter-1; baris++)
{
    for (var kolom = 0; kolom<=baris; kolom++)
    {
        bintang += ' * '
    }
    bintang += '\n'
}
console.log(bintang)