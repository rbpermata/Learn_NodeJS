// var angka = 1;
// while(angka <=10)
// {
//     console.log(angka);
//     angka++
// }

// var angka = 1;
// do
// {
//     console.log(angka);
//     angka++
// }
// while (angka <=10);

// var x;
// for (x=1; x<=10; x++)
// {
//     console.log(x);
// }

// var x;
// for (x=1; x<=10; x++)
// {
//     console.log('No Urut ' + x);
// }

// for (var i=0; i<=5; i++)
// {
//     console.log('nilai i ' + i);
//     for (var j=0; j<3; j++)
//     {
//         console.log('nilai j ' + j);
//     }
//     for (var k=0; k<2; k++)
//     {
//         console.log('nilai k ' + k);
//     }
// }


// Check again exercise #15
// var string ='';
// for (var i=0; i<5; i++)
// {
//     for (var j=0; j<5; j++)
//     {
//         string +
//     }
// }
// console.log (string)

// var string = '';
// for (var i=0; i<5; i++) // define berapa banyak baris kebawah
// {
//     for (var j=1; j<=i+1; j++) // J mulai dari 0, dan pembatasnya dimana sampai sebanyak i
//     {
//         string = string + ' * '; // munculkan bintang, dan menambah string dengan string
//     }
//     string = string + '\n'; // membuat new line untuk print bintang selanjutnya
// }
// console.log(string);

// console.log('');
// console.log('===============================');
// console.log('');

// // Exercise #17
// console.log('Exercise #17');
// console.log('');

// var string ='';
// for (i=0; i<=5; i++)
// {
//     for (j=5; j>i; j--)
//     {
//         string = string + ' * ';
//     } 
//     string = string + '\n';
// }
// console.log(string);

// console.log(string);

// console.log('');
// console.log('===============================');
// console.log('');

// // Exercise #18-A
// console.log('Exercise #18');
// console.log('');

// var string ='';
// for (i=0; i<10; i++)
// {
//     for (j=5; j>i; j--)
//     {
//         string = string + " * ";
//     }
//     string = string + '\n';
//     // for (k=1; k<i+1; k++)
//     // {
//     //     string = string + " * ";
//     // }
//     // string = string + '\n';
// }
// console.log(string);

// console.log('');
// console.log('===============================');
// console.log('');

// // Exercise #18-B
// console.log('Exercise #18-B');
// console.log('');

// var string ='';
// for (i=0; i<=5; i++)
// {
//     for (j=5; j>i; j--)
//     {
//         string = string + ' * ';
//     }
//     string = string + '\n';
// }

// for (i=0; i<4; i++)
// {
//     for (k=0; k<i+2; k++)
//     {
//         string = string + ' * ';
//     }
//     string = string + '\n';
// }
// console.log(string);

// console.log('');
// console.log('===============================');
// console.log('');

// Exercise #19
console.log('Exercise #19');
console.log('');

var string = '';
for (i=0; i<10; i++)
{
    for (j=0; j<9-i; j++) // print spasi
    {
        string = string + '   ';
    }
    for (k=0; k<(i*2)+1; k++) // print bintang
    {
        string = string + ' * '
    }
    string = string + '\n';
}
console.log(string);