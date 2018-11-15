var massa = 77;
var tinggi = 1.65;
var imt = massa/(tinggi**2);
console.log(imt);
console.log('');
var hasil = '';

if (imt<18.5)
{
    hasil = 'Berat Badan Anda Kurang';
}
else if (imt >= 18.5 && imt <25)
{
    hasil = 'Berat Badan Anda Ideal';
}
else if (imt >= 25 && imt <30)
{
    hasil = 'Berat Badan Anda Berlebih';
}
else if (imt >= 30 && imt <40)
{
    hasil = 'Berat Badan Anda Sangat Berlebih';
}
else if (imt >= 40)
{
    hasil = 'Berat Badan Anda Obesitas';
}
console.log (hasil);