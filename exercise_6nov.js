function genInvoice(angka)
{
    satuan = angka.toString().length;
    var kosong;


    for (var i=1;i<=angka;i++)
    {
        kosong =''
        for (var j=0; j<satuan-i.toString().length;j++) //untuk menghitung length max number contoh '10' length 2, lalu kalau i/j = 1, maka 2-1 = 1 buah String '0'
        {
            kosong = kosong + '0';
        }
        console.log('INV' + kosong + i);
    }
}

genInvoice(10);